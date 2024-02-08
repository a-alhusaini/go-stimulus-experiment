import { Application } from "stimulus";
import hello_controller from "./hello_controller.js";

window.Stimulus = Application.start();
Stimulus.register("hello", hello_controller);
