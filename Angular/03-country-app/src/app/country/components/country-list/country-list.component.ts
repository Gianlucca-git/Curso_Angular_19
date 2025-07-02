import {Component, input} from '@angular/core';
import {CountryInfo} from '../../interfaces/country.interfaces';

@Component({
  selector: 'country-list',
  imports: [],
  templateUrl: './country-list.component.html',
})
export class CountryListComponent {
  countries = input.required<CountryInfo[]>();
}
