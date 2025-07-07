import {Component, signal} from '@angular/core';
import {StatComponent} from "../../components/stat/stat.component";
import {ToggleCasePipe} from '../../pipes/toggle-case.pipe';
import {heroes} from '../../data/heros.data';
import {FlyCasePipe} from '../../pipes/fly-case.pipe';
import {ColorCasePipe} from '../../pipes/color-case.pipe';
import {NgStyle} from '@angular/common';
import {CreatorCasePipe} from '../../pipes/creator-case.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [
    StatComponent,
    ToggleCasePipe,
    FlyCasePipe,
    FlyCasePipe,
    ColorCasePipe,
    NgStyle,
    CreatorCasePipe,
  ],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {

  name = signal('Gianlucca');
  valueButton = signal(false);

  heroes = signal(heroes);
}
