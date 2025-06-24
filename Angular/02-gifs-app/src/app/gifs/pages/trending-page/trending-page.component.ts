import {Component, signal} from '@angular/core';
import {GifsListComponent} from '../../components/gifs-list/gifs-list.component';


const imagesUrls: string[] = [
  'https://i.pinimg.com/736x/e7/44/fd/e744fd713c47fdcea1a324f4d12a532c.jpg',
  'https://i.pinimg.com/736x/e7/44/fd/e744fd713c47fdcea1a324f4d12a532c.jpg',
  'https://i.pinimg.com/736x/e7/44/fd/e744fd713c47fdcea1a324f4d12a532c.jpg',
];
@Component({
  selector: 'app-trending-page',
  imports: [
    GifsListComponent
  ],
  templateUrl: './trending-page.component.html',
})
export default class TrendingPageComponent {

  gifs = signal(imagesUrls);
}
