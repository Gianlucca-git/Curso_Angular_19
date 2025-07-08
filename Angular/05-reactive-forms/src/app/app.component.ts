import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SideMenuComponent} from './share/components/side-menu/side-menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideMenuComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'reactive-forms';
}
