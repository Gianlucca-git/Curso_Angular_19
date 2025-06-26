import {Component, input} from '@angular/core';
import {GifsListItemComponent} from './gifs-list-item/gifs-list-item.component';
import {Gif} from '../../interfaces/gif.interface';

@Component({
  selector: 'gifs-list',
  imports: [
    GifsListItemComponent
  ],
  templateUrl: './gifs-list.component.html',
})
export class GifsListComponent {
  gifs = input.required<Gif[]>();
}
