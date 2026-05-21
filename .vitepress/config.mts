import { defineConfig } from "vitepress";
import { versionNavItems, versionSidebars } from "./versions.mts";
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
} from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import type { Plugin } from "vite";

const docsRoot = fileURLToPath(new URL("..", import.meta.url));
const examplesSrc = join(docsRoot, "examples");

// Derive versioned folder names from the sidebar map (e.g. "v1.0.0")
const versionNames = Object.keys(versionSidebars).map((prefix) =>
  prefix.replace(/^\/|\/$/g, ""),
);

// In dev: serves /examples/<file> and /v<version>/examples/<file> from .vitepress/examples/.
// In build: buildEnd copies .vitepress/examples/ into dist/examples/ and all dist/v*/examples/.
// Version-specific override: .vitepress/examples/<version>/<file> takes priority over base file.

/**
 * Resolves an example file path:
 * - If a version-specific file exists at examples/<version>/<file>, use it.
 * - Otherwise fall back to the base file at examples/<file>.
 */
function resolveExampleFile(fileName: string, version?: string): Buffer | null {
  if (version) {
    const versionPath = join(examplesSrc, version, fileName);
    if (existsSync(versionPath)) return readFileSync(versionPath);
  }
  const basePath = join(examplesSrc, fileName);
  return existsSync(basePath) ? readFileSync(basePath) : null;
}

function versionExamplesPlugin(): Plugin {
  return {
    name: "version-examples",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const match = req.url?.match(/^(?:\/(v[\w.-]+))?\/examples\/([^?#]+)/);
        if (match) {
          const version = match[1]; // undefined for /examples/...
          const fileName = match[2];
          const content = resolveExampleFile(fileName, version);
          if (content) {
            res.setHeader("Content-Type", "text/html; charset=utf-8");
            res.end(content);
            return;
          }
        }
        next();
      });
    },
  };
}

const aboutSection = {
  text: "About DataColor",
  items: [
    { text: "Introduction", link: "/" },
    { text: "Foundation", link: "/api-examples" },
    { text: "Token", link: "/design-tokens" },
    { text: "Changelog", link: "/changelog" },
  ],
};

const rootSidebar = [
  aboutSection,
  {
    text: "Components",
    items: [
      { text: "Icon", link: "/components/icon" },
      { text: "Tab Item", link: "/components/tab-item" },
    ],
  },
];

const versionAwareSidebar = Object.fromEntries(
  Object.entries(versionSidebars).map(([prefix, sections]) => [
    prefix,
    [aboutSection, ...sections],
  ]),
);

export default defineConfig({
  title: "DC DesignSystem",
  description: "Documentation for the design system components",
  head: [
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap",
        rel: "stylesheet",
      },
    ],
  ],
  vite: {
    plugins: [versionExamplesPlugin()],
  },
  buildEnd(siteConfig) {
    const outDir = siteConfig.outDir;
    // Only top-level files in .vitepress/examples/ are the base set.
    const baseFiles = readdirSync(examplesSrc, { withFileTypes: true })
      .filter((e) => e.isFile())
      .map((e) => e.name);

    // Latest / root — always use the base file.
    const rootOut = join(outDir, "examples");
    mkdirSync(rootOut, { recursive: true });
    for (const file of baseFiles) {
      copyFileSync(join(examplesSrc, file), join(rootOut, file));
    }

    // Each archived version — version-specific override takes priority.
    for (const version of versionNames) {
      const versionOut = join(outDir, version, "examples");
      mkdirSync(versionOut, { recursive: true });
      for (const file of baseFiles) {
        const override = join(examplesSrc, version, file);
        const src = existsSync(override) ? override : join(examplesSrc, file);
        copyFileSync(src, join(versionOut, file));
      }
    }
  },
  themeConfig: {
    search: {
      provider: "local",
    },
    nav: [
      { text: "Changelog", link: "/changelog" },
      {
        text: "Version",
        items: versionNavItems,
      },
    ],
    sidebar: {
      "/": rootSidebar,
      ...versionAwareSidebar,
    },
  },
});
