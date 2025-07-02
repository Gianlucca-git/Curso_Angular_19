import {Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {rxResource} from '@angular/core/rxjs-interop';
import {CountryService} from '../../services/country.service';
import {NotFoundComponent} from '../../../share/components/not-found/not-found.component';
import {DetailsPageComponent} from './details-page/details-page.component';

@Component({
  selector: 'app-country-page',
  imports: [
    NotFoundComponent,
    DetailsPageComponent
  ],
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent {

  // tambien se puede hacer con Observable (eje en 02-gifs)
  countryCode = inject(ActivatedRoute).snapshot.params['code'];
  countryService = inject(CountryService);

  countryResource = rxResource({
    request: () => ({code: this.countryCode}),
    loader: ({request}) => {
      return this.countryService.searchCountryByCode(request.code);
    }
  })

}
