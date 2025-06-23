import {effect, Injectable, signal} from '@angular/core';
import {Character} from '../interfaces/character.interface';

// function loadFromLocalStorage() {
// }

const loadFromLocalStorage = (): Character[] =>{
  const characters = localStorage.getItem('characters');
  // if (characters) {
  //   const localStorage = JSON.parse(characters);
  // }
  return characters ? JSON.parse(characters) : [];
}

@Injectable({providedIn: 'root'})
export class DragonBallService {

  characters = signal<Character[]>(
    loadFromLocalStorage()
  );

  saveLocalStorage = effect(()=> {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });

  addCharacter(character: Character) {
    this.characters.update(
      list => [...list, character]
    );
  }

}
