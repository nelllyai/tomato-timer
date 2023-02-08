import { MajorTask, StandardTask, UnimportantTask } from "./task";

export class TaskCommand {
  constructor(tomato, title, counter = 0) {
    this.tomato = tomato;
    this.title = title;
    this.counter = counter;
  }

  execute() {
    throw new Error('Недопустимая команда');
  }
}

export class CreateMajorTask extends TaskCommand {
  execute() {
    this.tomato.addTask(new MajorTask(this.title, this.counter));
  }
}

export class CreateStandardTask extends TaskCommand {
  execute() {
    this.tomato.addTask(new StandardTask(this.title, this.counter));
  }
}

export class CreateUnimportantTask extends TaskCommand {
  execute() {
    this.tomato.addTask(new UnimportantTask(this.title, this.counter));
  }
}
