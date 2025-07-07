import {Component} from '@angular/core';
import {LowerCasePipe, TitleCasePipe, UpperCasePipe} from "@angular/common";
import {StatComponent} from '../../components/stat/stat.component';

@Component({
  selector: 'app-uncommon-page',
  imports: [
    LowerCasePipe,
    TitleCasePipe,
    UpperCasePipe,
    StatComponent
  ],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {

}
