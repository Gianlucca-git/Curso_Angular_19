import { Component } from '@angular/core';
import {JsonPipe} from '@angular/common';
import {HeaderComponentComponent} from '../../header-component/header-component.component';

@Component({
  selector: 'app-switches-page',
  imports: [
    JsonPipe,
    HeaderComponentComponent
  ],
  templateUrl: './switches-page.component.html',
})
export class SwitchesPageComponent {

}
