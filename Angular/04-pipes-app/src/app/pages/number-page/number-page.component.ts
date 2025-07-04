import {Component, signal} from '@angular/core';
import {CurrencyPipe, DecimalPipe, LowerCasePipe, PercentPipe, TitleCasePipe, UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-number-page',
  imports: [
    LowerCasePipe,
    TitleCasePipe,
    UpperCasePipe,
    DecimalPipe,
    PercentPipe,
    CurrencyPipe
  ],
  templateUrl: './number-page.component.html',
})
export default class NumberPageComponent {

  totalSells = signal(2_433_323.1234);
  percent = signal(0.46);
}
