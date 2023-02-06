import Task from "./modules/task";
import Tomato from "./modules/tomato";

let count = 0;
const imp = ['default', 'important', 'so-so']
document.querySelector('.button-importance').addEventListener('click', ({target}) => {
  count += 1;
  if (count >= imp.length) {
    count = 0
  }

  for (let i = 0; i < imp.length; i++) {
    if (count === i) {
      target.classList.add(imp[i])
    } else {
      target.classList.remove(imp[i])
    }
  }
})

const tasks = [new Task('тест'), new Task('второй', 8)];

const test = {
  time: 5,
  pause: 3,
  bigPause: 5,
  tasks,
};

const tomatoTimer = new Tomato(test);
tomatoTimer.addTask(new Task('еще'));
tomatoTimer.activateTask(tasks[1].id).run();
