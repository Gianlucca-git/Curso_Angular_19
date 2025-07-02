import {Component, signal} from '@angular/core';
import {SearchInputComponent} from '../../components/search-input/search-input.component';
import {CountryListComponent} from '../../components/country-list/country-list.component';
import {CountryInfo} from '../../interfaces/country.interfaces';

@Component({
  selector: 'app-by-country-page',
  imports: [
    SearchInputComponent,
    CountryListComponent
  ],
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent {
  countries = signal<CountryInfo[]>([]);
}
