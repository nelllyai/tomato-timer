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

export default Task;
