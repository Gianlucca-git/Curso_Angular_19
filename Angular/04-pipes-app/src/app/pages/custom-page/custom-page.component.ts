import {Component, signal} from '@angular/core';
import {StatComponent} from "../../components/stat/stat.component";
import {ToggleCasePipe} from '../../pipes/toggle-case.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [
    StatComponent,
    ToggleCasePipe,
  ],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {

  name = signal('Gianlucca');
  valueButton = signal(false);

}
