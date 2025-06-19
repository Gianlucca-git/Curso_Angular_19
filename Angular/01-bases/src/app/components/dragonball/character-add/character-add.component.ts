import {Component, signal} from '@angular/core';
import type {Character} from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  templateUrl: './character-add.component.html',
})
export class CharacterAddComponent {
  protected readonly parseInt = parseInt;

  name = signal('');
  power = signal(0);

  // characters = signal<Character[]>([
  //   {id: 1, name: 'Goku', power: 9000},
  //   {id: 2, name: 'Vegeta', power: 8000},
  // ]);


  addCharacter() {
    if (!this.name() || !this.power() || this.power() < 0) {
      return;
    }

    const newCharacter: Character = {
      id: 1000,
      name: this.name(),
      power: this.power(),
    };

    // this.characters.update(
    //   list => [...list, newCharacter]
    // );
    console.log({newCharacter});

    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }

}
