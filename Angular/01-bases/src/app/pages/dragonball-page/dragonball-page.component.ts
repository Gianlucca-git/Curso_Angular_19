import {Component, signal} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

interface Character {
  id: number;
  name: string,
  power: number,
}

@Component({
  templateUrl: './dragonball-page.component.html',
})
export class DragonballPageComponent {
  characters = signal<Character[]>([
    {id: 1, name: 'Goku', power: 9001},
    {id: 2, name: 'Vegeta', power: 8000},
    {id: 3, name: 'Piccolo', power: 7000},
  ])
}
