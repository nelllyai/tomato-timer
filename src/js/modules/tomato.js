class Tomato {
  activeTask = null;

  constructor({ time = 25, pause = 5, bigPause = 15, tasks = [] }) {
    this.time = time;
    this.pause = pause;
    this.bigPause = bigPause;
    this.tasks = tasks;
  }

  addTask(task) {
    this.tasks.push(task);
    return this;
  }

  activateTask(id) {
    this.activeTask = this.findTask(id);
    return this;
  }

  run() {
    const taskTime = this.toMinutes(this.time);
    const pauseTime = this.toMinutes(this.pause);
    const bigPauseTime = this.toMinutes(this.bigPause);

    try {
      if (!this.activeTask) {
        throw new Error('Нет активной задачи!');
      }

      console.log('Активировали задачу #' + this.activeTask.id);

      setTimeout(() => {
        if (this.activeTask.counter % 3 === 0) {
          setTimeout(() => {
            console.log('Хорошо отдохнули!');
          }, bigPauseTime);
        } else {
          setTimeout(() => {
            console.log('Отдохнули');
          }, pauseTime);
        }
      }, taskTime);
      this.addCounter(this.activeTask.id);
    } catch (err) {
      console.error(err.message);
    }
  }

  addCounter(id) {
    this.findTask(id).addCounter();
  }

  findTask(id) {
    return this.tasks.find(task => task.id === id);
  }

  toMinutes(sec) {
    return sec * 1000 * 60;
  }
}

export default Tomato;
