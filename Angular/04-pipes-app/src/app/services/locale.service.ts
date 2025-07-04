import {Injectable} from '@angular/core';
import {signal} from '@angular/core';


export type availableLocales = 'es' | 'fr' | 'en'

@Injectable({
  providedIn: 'root'
})
export class LocaleService {

  private currentLocale = signal<availableLocales>('es');

  constructor() {
    this.currentLocale.set(
      (localStorage.getItem('local') as availableLocales) ?? 'es'
    );
  }

  get getLocale() {
    return this.currentLocale();
  }

  changeLocale(locale: availableLocales) {
    localStorage.setItem('local', locale);
    this.currentLocale.set(locale);
    window.location.reload();
  }

}
