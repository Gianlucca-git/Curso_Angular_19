import {Component} from '@angular/core';
import {routes} from '../../app.routes'
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

  routes = routes.map((router) => ({
    title: router.title ?? '',
    path: router.path ?? '',
  }));

}
