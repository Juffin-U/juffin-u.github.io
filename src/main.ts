import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Flicking from "@egjs/vue3-flicking";
import "vueperslides/dist/vueperslides.css";
import "@egjs/vue3-flicking/dist/flicking.css";

createApp(App)
  .use(store)
  .use(router)
  .component("Flicking", Flicking)
  .mount("#app");
