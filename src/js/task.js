class Task {
  #id;
  #title;
  #counter;

  constructor (id, title, counter = 0) {
    this.#id = Math.floor(Math.random() * 1000);
    this.#title = title;
    this.#counter = counter;
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
