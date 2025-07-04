import {Component, effect, inject, LOCALE_ID, signal} from '@angular/core';
import {DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe} from '@angular/common';
import {availableLocales, LocaleService} from '../../services/locale.service';

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

  localService = inject(LocaleService);
  currentLocal = signal(inject(LOCALE_ID)); //se puede desde el LocalService

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

  changeLocale(locale: availableLocales) {
    this.localService.changeLocale(locale);
  }
}
