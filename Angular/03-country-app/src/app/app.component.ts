import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FooterComponent} from './share/components/footer/footer.component';
// import {RouterOutlet} from '@angular/router';
// import {HomeComponent} from './share/pages/home/home.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FooterComponent,
    // HomeComponent
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'country-app';
}
