import {Component, inject} from '@angular/core';
import {CharacterListComponent} from '../../components/dragonball/character-list/character-list.component';
import {CharacterAddComponent} from '../../components/dragonball/character-add/character-add.component';
import {DragonBallService} from '../../services/dragonball.service';


@Component({
  templateUrl: './dragonball-page-v2.component.html',
  selector: 'dragonball-page-v2',
  imports: [
    CharacterListComponent,
    CharacterAddComponent,
  ]
})
export class DragonballPageV2Component {
  public dragonballService = inject(DragonBallService);
}
