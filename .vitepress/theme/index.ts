import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import { h } from "vue";
import "./style.css";
import ColorTokenTabs from "./components/ColorTokenTabs.vue";
import DocsPlayground from "./components/DocsPlayground.vue";
import VersionBanner from "./components/VersionBanner.vue";
import VersionNavCurrentLabel from "./components/VersionNavCurrentLabel.vue";

const theme: Theme = {
  extends: DefaultTheme,
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      "layout-top": () => h(VersionBanner),
      "nav-bar-content-after": () => h(VersionNavCurrentLabel),
    }),
  enhanceApp({ app }) {
    app.component("ColorTokenTabs", ColorTokenTabs);
    app.component("DocsPlayground", DocsPlayground);
  },
};

export default theme;
