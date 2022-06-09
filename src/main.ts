import { createApp } from "vue";
import { createI18n } from "vue-i18n";

import App from "./App.vue";

import "./assets/css/index.css";

import { defaultLocale, fallbackLocale, languages } from "./locales/index.js";

const i18n = createI18n({
  locale: defaultLocale,
  fallbackLocale,
  messages: Object.assign(languages),
});

const app = createApp(App);

app.use(i18n);
app.mount("#app");
