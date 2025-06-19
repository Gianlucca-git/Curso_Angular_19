import {Component, computed, signal} from '@angular/core';
import {CharacterListComponent} from '../../components/dragonball/character-list/character-list.component';

interface Character {
  id: number;
  name: string,
  power: number,
}

@Component({
  templateUrl: './dragonball-page-v2.component.html',
  selector: 'dragonball-page-v2',
  imports: [
    CharacterListComponent
  ]
})
export class DragonballPageV2Component {

  name = signal('');
  power = signal(0);


  characters = signal<Character[]>([
    {id: 1, name: 'Goku', power: 9000},
    {id: 2, name: 'Vegeta', power: 8000},
  ]);

  protected readonly parseInt = parseInt;

  addCharacter() {
    if (!this.name() || !this.power() || this.power() < 0) {
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };

    // this.characters().push(newCharacter);
    this.characters.update(
      list => [...list, newCharacter]
    );

    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
