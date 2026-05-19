import { readdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

type LinkItem = {
  text: string;
  link: string;
};

type VersionEntry = {
  name: string;
  pages: LinkItem[];
};

type SidebarSection = {
  text: string;
  items: LinkItem[];
};

const docsRoot = fileURLToPath(new URL("..", import.meta.url));
const versionFolderPattern = /^v\d[\w.-]*$/;

function toTitle(fileName: string) {
  return fileName
    .replace(/\.md$/, "")
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function collectMarkdownPages(
  directory: string,
  routeParts: string[] = [],
): LinkItem[] {
  return readdirSync(directory, { withFileTypes: true })
    .sort((left, right) =>
      left.name.localeCompare(right.name, undefined, {
        numeric: true,
        sensitivity: "base",
      }),
    )
    .flatMap((entry) => {
      const absolutePath = join(directory, entry.name);
      const nextRouteParts = [...routeParts, entry.name.replace(/\.md$/, "")];

      if (entry.isDirectory()) {
        return collectMarkdownPages(absolutePath, [...routeParts, entry.name]);
      }

      if (!entry.isFile() || !entry.name.endsWith(".md")) {
        return [];
      }

      return [
        {
          text: toTitle(entry.name),
          link: `/${nextRouteParts.join("/")}`,
        },
      ];
    });
}

function getVersionEntries(): VersionEntry[] {
  return readdirSync(docsRoot, { withFileTypes: true })
    .filter(
      (entry) => entry.isDirectory() && versionFolderPattern.test(entry.name),
    )
    .map((entry) => ({
      name: entry.name,
      pages: collectMarkdownPages(join(docsRoot, entry.name), [entry.name]),
    }))
    .filter((entry) => entry.pages.length > 0)
    .sort((left, right) =>
      right.name.localeCompare(left.name, undefined, {
        numeric: true,
        sensitivity: "base",
      }),
    );
}

const versionEntries = getVersionEntries();

export const versionNavItems: LinkItem[] = [
  { text: "Latest", link: "/components/tab-item" },
  ...versionEntries.map((entry) => ({
    text: entry.name,
    link: entry.pages[0].link,
  })),
];

export const versionSidebarItems: LinkItem[] = versionEntries.flatMap((entry) =>
  entry.pages.map((page) => ({
    text: `${entry.name} / ${page.text}`,
    link: page.link,
  })),
);

export const versionSidebars: Record<string, SidebarSection[]> =
  Object.fromEntries(
    versionEntries.map((entry) => {
      const componentItems = entry.pages.filter((page) =>
        page.link.startsWith(`/${entry.name}/components/`),
      );

      const sections: SidebarSection[] = [];

      if (componentItems.length > 0) {
        sections.push({
          text: "Components",
          items: componentItems,
        });
      }

      return [`/${entry.name}/`, sections];
    }),
  );
