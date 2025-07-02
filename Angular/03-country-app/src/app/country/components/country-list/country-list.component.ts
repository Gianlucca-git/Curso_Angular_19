import {Component, input} from '@angular/core';
import {CountryInfo} from '../../interfaces/country.interfaces';
import {DecimalPipe} from '@angular/common';

@Component({
  selector: 'country-list',
  imports: [DecimalPipe],
  templateUrl: './country-list.component.html',
})
export class CountryListComponent {
  countries = input.required<CountryInfo[]>();
}
