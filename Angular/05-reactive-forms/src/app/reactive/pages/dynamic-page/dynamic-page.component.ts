import { Component } from '@angular/core';
import {JsonPipe} from '@angular/common';
import {HeaderComponentComponent} from '../../header-component/header-component.component';

@Component({
  selector: 'app-dynamic-page',
  imports: [
    JsonPipe,
    HeaderComponentComponent
  ],
  templateUrl: './dynamic-page.component.html',
})
export class DynamicPageComponent {

}
