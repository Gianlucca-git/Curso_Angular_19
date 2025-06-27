import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {GifsService} from '../../../services/gifs.service';

interface MenuOptions {
  icon: string;
  label: string;
  router: string;
  subLabel: string;
}

@Component({
  selector: 'gifs-side-menu-options',
  templateUrl: './gifs-side-menu-options.component.html',
  imports: [
    RouterLink
  ]
})
export class GifsSideMenuOptionsComponent {

  menuOptions: MenuOptions[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      router: '/dashboard/trending',
      subLabel: 'Gifs Populares',
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Search',
      router: '/dashboard/search',
      subLabel: 'Buscador de Gifs',
    },
  ];

  gifService = inject(GifsService);

}
