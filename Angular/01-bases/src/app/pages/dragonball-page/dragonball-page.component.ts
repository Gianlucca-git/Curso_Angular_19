import {Component, computed, signal} from '@angular/core';

interface Character {
  id: number;
  name: string,
  power: number,
}

@Component({
  templateUrl: './dragonball-page.component.html',
  imports: [
    // NgClass
  ]
})
export class DragonballPageComponent {

  name = signal('gohan');
  power = signal(10000);


  characters = signal<Character[]>([
    {id: 1, name: 'Goku', power: 9000},
    {id: 2, name: 'Vegeta', power: 8000},
    {id: 3, name: 'Piccolo', power: 7000},
    {id: 3, name: 'Yamcha', power: 100},
  ]);

  // powerClass = computed(() => {
  //   return {
  //     'text-danger': true,
  //   }
  // })
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
