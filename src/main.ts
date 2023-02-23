import { createApp } from "vue";
import mdiVue from "mdi-vue/v3";
import * as mdiJs from "@mdi/js";
import App from "./App.vue";

import "./assets/main.css";

createApp(App).use(mdiVue, { icons: mdiJs }).mount("#app");
