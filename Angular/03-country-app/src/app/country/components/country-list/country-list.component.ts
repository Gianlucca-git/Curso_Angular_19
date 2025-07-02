import {Component, input} from '@angular/core';
import {CountryInfo} from '../../interfaces/country.interfaces';
import {DecimalPipe} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'country-list',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './country-list.component.html',
})
export class CountryListComponent {
  countries = input.required<CountryInfo[]>();
}
