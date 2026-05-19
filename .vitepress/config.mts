import { defineConfig } from "vitepress";
import { versionNavItems, versionSidebars } from "./versions.mts";

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
