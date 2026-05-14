import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import TabItemPlayground from "./components/TabItemPlayground.vue";

const theme: Theme = {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("TabItemPlayground", TabItemPlayground);
  },
};

export default theme;
