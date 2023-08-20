import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import RegisterUI from "./ui/RegisterUI";

const app = createApp(App);
RegisterUI(app);
app.mount("#app");
