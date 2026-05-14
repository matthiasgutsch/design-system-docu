import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import DocsPlayground from "./components/DocsPlayground.vue";
import TabItemAnatomy from "./components/TabItemAnatomy.vue";
import TabItemPlayground from "./components/TabItemPlayground.vue";
import TabItemPreview from "./components/TabItemPreview.vue";
import TabItemStateGrid from "./components/TabItemStateGrid.vue";

const theme: Theme = {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("DocsPlayground", DocsPlayground);
    app.component("TabItemAnatomy", TabItemAnatomy);
    app.component("TabItemPlayground", TabItemPlayground);
    app.component("TabItemPreview", TabItemPreview);
    app.component("TabItemStateGrid", TabItemStateGrid);
  },
};

export default theme;
