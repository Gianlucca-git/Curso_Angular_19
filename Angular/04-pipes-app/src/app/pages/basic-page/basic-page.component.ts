import {Component, effect, signal} from '@angular/core';
import {DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-basic-page',
  imports: [
    LowerCasePipe,
    UpperCasePipe,
    TitleCasePipe,
    DatePipe
  ],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent {

  nameLower = signal('gianlucca');
  nameUpper = signal('GIANLUCCA');
  fullName = signal('GianLuccA');

  nowDate = signal(new Date());

  tickingDateEffect = effect((onCleanup) => {
    const interval = setInterval(() => {
      this.nowDate.set(new Date());
      console.log('nowDate');
    }, 1000)
    onCleanup(() => clearInterval(interval));
  })
}
