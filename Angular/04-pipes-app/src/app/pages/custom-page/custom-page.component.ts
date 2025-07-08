import {Component, signal} from '@angular/core';
import {StatComponent} from "../../components/stat/stat.component";
import {ToggleCasePipe} from '../../pipes/toggle-case.pipe';
import {heroes} from '../../data/heros.data';
import {FlyCasePipe} from '../../pipes/fly-case.pipe';
import {ColorCasePipe} from '../../pipes/color-case.pipe';
import {CreatorCasePipe} from '../../pipes/creator-case.pipe';
import {SortByPipe} from '../../pipes/sort-by.pipe';
import {Hero} from '../../interfaces/hero.interface';
import {FilterPipe} from '../../pipes/filter.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [
    StatComponent,
    ToggleCasePipe,
    FlyCasePipe,
    FlyCasePipe,
    ColorCasePipe,
    CreatorCasePipe,
    SortByPipe,
    FilterPipe,
  ],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {

  name = signal('Gianlucca');
  valueButton = signal(false);

  heroes = signal(heroes);

  sortBy = signal<keyof Hero | null>(null);

  searcher = signal('');
}
