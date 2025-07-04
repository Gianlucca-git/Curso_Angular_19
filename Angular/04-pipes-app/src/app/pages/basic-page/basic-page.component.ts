import {Component, signal} from '@angular/core';
import {LowerCasePipe, TitleCasePipe, UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-basic-page',
  imports: [
    LowerCasePipe,
    UpperCasePipe,
    TitleCasePipe
  ],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent {

  nameLower = signal('gianlucca');
  nameUpper = signal('GIANLUCCA');
  fullName = signal('GianLuccA');

}
