import {Component} from '@angular/core';
import {reactiveRoutes} from '../../../reactive/reactive.routes';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {TitleCasePipe} from '@angular/common';

interface MenuItem {
  title: string;
  route: string;
  icon: string;
}

const reactiveItems = reactiveRoutes[0].children ?? [];

@Component({
  selector: 'app-side-menu',
  imports: [
    RouterLink,
    RouterLinkActive,
    TitleCasePipe
  ],
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent {

  reactiveMenu: MenuItem[] = reactiveItems
    .filter((route) => route.path !== '**')
    .map((route) => ({
      route: `reactive/${route.path}`,
      title: `${route.path}`,
      icon: route.data?.['icon'] || '',
    }));

  authMenu: MenuItem[] = [{
    title: 'Register',
    route: './auth',
    icon: 'M15 4a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4m0 1.9a2.1 2.1 0 1 1 0 4.2A2.1 2.1 0 0 1 12.9 8A2.1 2.1 0 0 1 15 5.9M4 7v3H1v2h3v3h2v-3h3v-2H6V7zm11 6c-2.67 0-8 1.33-8 4v3h16v-3c0-2.67-5.33-4-8-4m0 1.9c2.97 0 6.1 1.46 6.1 2.1v1.1H8.9V17c0-.64 3.1-2.1 6.1-2.1',
  }]

  countryMenu: MenuItem[] = [{
    title: 'Countries',
    route: './country',
    icon: 'M6.5 2.309v8.69a.5.5 0 0 1-.032.176L9.5 12.691V3.809zm-1-.04L2 3.825v8.906l3.527-1.568a.5.5 0 0 1-.027-.164zm.274-1.216a.5.5 0 0 1 .471.01l3.768 1.884l4.284-1.904A.5.5 0 0 1 15 1.5v10a.5.5 0 0 1-.297.457l-4.5 2a.5.5 0 0 1-.427-.01l-3.789-1.894l-4.283 1.904a.5.5 0 0 1-.703-.457v-10a.5.5 0 0 1 .297-.457zM10.5 3.825v8.906l3.5-1.556V2.27z',
  }]
}
