import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import type {Character} from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterListComponent {
  listName = input.required<string>();
  characters = input.required<Character[]>();
}
