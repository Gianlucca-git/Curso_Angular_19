import {Component, input} from '@angular/core';

@Component({
  selector: 'app-stat',
  imports: [
  ],
  templateUrl: './stat.component.html',
})
export class StatComponent {

  title= input.required();

}
