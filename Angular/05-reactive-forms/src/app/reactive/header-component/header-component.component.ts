import {Component, input} from '@angular/core';

@Component({
  selector: 'header-component',
  imports: [],
  templateUrl: './header-component.component.html',
})
export class HeaderComponentComponent {
  title = input.required();
}
