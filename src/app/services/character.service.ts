import { Injectable } from '@angular/core';
import { Character } from '../interface/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private character: Character

  constructor() {
    let character: any = JSON.parse(localStorage.getItem('items') || '[]')
    if(character.length === 0) {
      this.character = this.default()
    } else {
      this.character = JSON.parse(localStorage.getItem('items') || '[]')
    }
  }

  save(character: Character) {
    this.character = character
    this.updateLocalStorage()
  }

  delete() {
    localStorage.clear()
    this.character = this.default()
    this.updateLocalStorage()
  }

  getLastSave() {
    return this.character!
  }

  addItem(item: string) {
    this.character!.inventory.push(item);
    this.updateLocalStorage()
  }

  removeItem(item: string) {
    var index = this.character!.inventory.indexOf(item);
    if (index !== -1) {
      this.character!.inventory.splice(index, 1);
    }

    this.updateLocalStorage()
  }

  addLog(log: string) {
    this.character!.logs.push(log);
    this.updateLocalStorage();
  }

  addHealth(addHealth: boolean) {
    if (addHealth) {
      this.character!.health++
    } else {
      this.character!.health--
    }
    this.updateLocalStorage();
  }

  addSanity(addSanity: boolean) {
    if (addSanity) {
      this.character!.sanity++
    } else {
      this.character!.sanity--
    }
    this.updateLocalStorage();
  }

  editJournal(journal: string) {
    this.character!.journal = journal
    this.updateLocalStorage()
  }
  
  editNotebook(notebook: string) {
    this.character!.notebook = notebook
    this.updateLocalStorage()
  }

  updateLocalStorage() {
    localStorage.setItem('items', JSON.stringify(this.character))
  }

  default(): Character {
    return {
      name: "",
      creation: new Date(),
      occupational: {
          name: "Journalist",
          status: {
              physical: 1,
              intellectual: 2,
              social: 3
          }
      },
      background: "",
      health: 10,
      sanity: 10,
      inventory: [],
      journal: "",
      notebook: "",
      logs: []
    }
  }
}
