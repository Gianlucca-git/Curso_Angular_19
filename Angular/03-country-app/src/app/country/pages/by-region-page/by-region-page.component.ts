import {Component, inject, linkedSignal, output, signal} from '@angular/core';
import {CountryListComponent} from '../../components/country-list/country-list.component';
import {CountryService} from '../../services/country.service';
import {rxResource} from '@angular/core/rxjs-interop';
import {of} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'region-page',
  imports: [
    CountryListComponent
  ],
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent {
  regions: string[] = [
    'Americas',
    'Africa',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];

  activatedRoute = inject(ActivatedRoute);
  queryParam = this.activatedRoute.snapshot.queryParamMap.get('region') ?? '';
  regionParam = this.regions.includes(this.queryParam) ? this.queryParam : this.regions[0];

  router = inject(Router);

  inputValue = linkedSignal<string | null>(() => this.regionParam);

  countryService = inject(CountryService);
  query = signal('');

  countryResources = rxResource({

    request: () => ({
      region: this.inputValue()
    }),
    loader: ({request}) => {
      if (!request.region) return of([]);

      this.router.navigate(['/country/region'], {
        queryParams: {
          region: request.region
        }
      });

      return this.countryService.searchByRegion(request.region)
    }
  })

}
