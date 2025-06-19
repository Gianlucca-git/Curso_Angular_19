import {Component, signal} from '@angular/core';
import {CharacterListComponent} from '../../components/dragonball/character-list/character-list.component';
import {CharacterAddComponent} from '../../components/dragonball/character-add/character-add.component';
import {Character} from '../../interfaces/character.interface';


@Component({
  templateUrl: './dragonball-page-v2.component.html',
  selector: 'dragonball-page-v2',
  imports: [
    CharacterListComponent,
    CharacterAddComponent,
  ]
})
export class DragonballPageV2Component {

  characters = signal<Character[]>([
    {id: 1, name: 'Goku', power: 9000},
    {id: 2, name: 'Vegeta', power: 8000},
  ]);
}
