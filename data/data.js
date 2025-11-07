export class Creations {
  creations;
  #localStorageKey;

  constructor(localStorageKey) {
    this.#localStorageKey = localStorageKey;
    this.loadFromStorage();
  }
  loadFromStorage() {
    this.creations = JSON.parse(localStorage.getItem(this.#localStorageKey)) || [];
  }

  addCreation(creation) {
    this.creations.push(creation);
    this.saveToStorage();
  }

  saveToStorage() {
    localStorage.setItem(this.#localStorageKey, JSON.stringify(this.creations));
  }

  getAllCreations() {
    return this.creations;
  }
}

//console.log(Creations);