import {creationsInstance} from '../public/main.js ';



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

export function loadFromStorage(fun) {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {
    Creations.creations = JSON.parse(xhr.response).getItems(localStorage) || [];
    });
    fun();
    xhr.open('GET', 'https://katapathpawra.org');
    xhr.send();
  }
      