import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Design System",
  description: "Documentation for the design system components",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Components", link: "/components/icon" },
      { text: "Changelog", link: "/changelog" },
    ],
    sidebar: {
      "/": [
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
        {
          text: "Versions",
          items: [
            { text: "v1.0.0 / Tab Item", link: "/v1.0.0/components/tab-item" },
          ],
        },
      ],
    },
  },
});
