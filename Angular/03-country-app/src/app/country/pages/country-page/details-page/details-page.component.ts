import {Component, input} from '@angular/core';
import {CountryInfo} from '../../../interfaces/country.interfaces';
import {DecimalPipe} from '@angular/common';

@Component({
  selector: 'country-details-page',
  imports: [
    DecimalPipe
  ],
  templateUrl: './details-page.component.html',
})
export class DetailsPageComponent {

  country = input.required<CountryInfo>();
}
