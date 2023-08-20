import { App } from "vue";
import FormControl from "./FormControl.vue";
import ButtonControl from "./ButtonControl.vue";

export default function RegisterUI(app: App<Element>) {
  // Register components here
  app.component("FormControl", FormControl);
  app.component("ButtonControl", ButtonControl);
}
