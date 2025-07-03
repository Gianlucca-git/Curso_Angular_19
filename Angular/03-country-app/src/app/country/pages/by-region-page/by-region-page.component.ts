import {Component, inject, output, signal} from '@angular/core';
import {CountryListComponent} from '../../components/country-list/country-list.component';
import {CountryService} from '../../services/country.service';
import {rxResource} from '@angular/core/rxjs-interop';
import {of} from 'rxjs';

@Component({
  selector: 'region-page',
  imports: [
    CountryListComponent
  ],
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent {

  inputValue = signal<string | null>('');

  regions: string[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];

  countryService = inject(CountryService);
  query = signal('');

  countryResources = rxResource({

    request: () => ({
      region: this.inputValue()
    }),
    loader: ({request}) => {
      if (!request.region) return of([]);
      return this.countryService.searchByRegion(request.region)
    }
  })

}
