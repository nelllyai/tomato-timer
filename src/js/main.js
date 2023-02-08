import { MajorTask, StandardTask, UnimportantTask } from "./modules/task";
import Tomato from "./modules/tomato";

const test = {
  time: 5,
  pause: 3,
  bigPause: 5
};

const tomatoTimer = new Tomato(test, document.querySelector('.main'));
