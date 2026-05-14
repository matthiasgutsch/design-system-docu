import { defineConfig } from "vitepress";
import { versionNavItems, versionSidebarItems } from "./versions.mts";

const rootSidebar = [
  {
    text: "Getting Started",
    items: [
      { text: "Introduction", link: "/" },
      { text: "API Examples", link: "/api-examples" },
      { text: "Markdown Examples", link: "/markdown-examples" },
      { text: "Changelog", link: "/changelog" },
    ],
  },
  {
    text: "Components",
    items: [
      { text: "Icon", link: "/components/icon" },
      { text: "Tab Item", link: "/components/tab-item" },
    ],
  },
  ...(versionSidebarItems.length > 0
    ? [
        {
          text: "Versions",
          items: versionSidebarItems,
        },
      ]
    : []),
];

export default defineConfig({
  title: "Design System",
  description: "Documentation for the design system components",
  themeConfig: {
    search: {
      provider: "local",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Components", link: "/components/icon" },
      { text: "Changelog", link: "/changelog" },
      {
        text: "Version",
        items: versionNavItems,
      },
    ],
    sidebar: {
      "/": rootSidebar,
    },
  },
});
