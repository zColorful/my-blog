import DefaultTheme from "vitepress/theme";
import VueClickAway from "../../../components/VueClickAway.vue";
import JsTest from "../../../components/JsTest.vue";
import Css from "../../../components/t-css.vue";
import GlobalComponent from "../../../components/GlobalComponent.vue";
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app
      .component("VueClickAway", VueClickAway)
      .component("JsTest", JsTest)
      .component("t-css", Css)
      .component("GlobalComponent", GlobalComponent);
  },
};
