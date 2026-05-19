import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import { h } from "vue";
import "./style.css";
import DocsPlayground from "./components/DocsPlayground.vue";
import TabItemAnatomy from "./components/TabItemAnatomy.vue";
import TabItemPlayground from "./components/TabItemPlayground.vue";
import TabItemPreview from "./components/TabItemPreview.vue";
import TabItemStateGrid from "./components/TabItemStateGrid.vue";
import VersionBanner from "./components/VersionBanner.vue";

const theme: Theme = {
  extends: DefaultTheme,
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      "layout-top": () => h(VersionBanner),
    }),
  enhanceApp({ app }) {
    app.component("DocsPlayground", DocsPlayground);
    app.component("TabItemAnatomy", TabItemAnatomy);
    app.component("TabItemPlayground", TabItemPlayground);
    app.component("TabItemPreview", TabItemPreview);
    app.component("TabItemStateGrid", TabItemStateGrid);
  },
};

export default theme;
