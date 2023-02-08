class Task {
  #id;
  #title;
  #counter;

  constructor (title, counter = 0) {
    this.#id = Math.floor(Math.random() * 1000);
    this.#title = title;
    this.#counter = counter;
  }

  get id() {
    return this.#id;
  }

  get title() {
    return this.#title;
  }

  get counter() {
    return this.#counter;
  }

  addCounter() {
    this.#counter++;
    return this;
  }

  setTitle(title) {
    this.#title = title;
    return this;
  }
};

// важная задача
export class MajorTask extends Task {
  #importance = 'major';

  constructor(title, counter = 0) {
    super(title, counter);
  }

  get importance() {
    return this.#importance;
  }
}

// стандартная задача
export class StandardTask extends Task {
  #importance = 'standard';

  constructor(title, counter = 0) {
    super(title, counter);
  }

  get importance() {
    return this.#importance;
  }
}

// неважная задача
export class UnimportantTask extends Task {
  #importance = 'unimportant';

  constructor(title, counter = 0) {
    super(title, counter);
  }

  get importance() {
    return this.#importance;
  }
}

export default Task;
