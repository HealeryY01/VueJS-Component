import { createApp } from "vue";
import App from "./App.vue";
// createApp(App).mount("app");
import GobalComponent from "./components/GobalComponent.vue";
const app = createApp(App);
app.component("GobalComponent", GobalComponent);
app.mount("#app");
