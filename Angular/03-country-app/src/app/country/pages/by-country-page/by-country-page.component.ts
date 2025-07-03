import {Component, inject, signal} from '@angular/core';
import {SearchInputComponent} from '../../components/search-input/search-input.component';
import {CountryListComponent} from '../../components/country-list/country-list.component';
import {CountryService} from '../../services/country.service';
import {of} from 'rxjs';
import {rxResource} from '@angular/core/rxjs-interop';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-by-country-page',
  imports: [
    SearchInputComponent,
    CountryListComponent
  ],
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent {

  activatedRoute = inject(ActivatedRoute);
  queryParam = this.activatedRoute.snapshot.queryParamMap.get('query') ?? '';

  router = inject(Router);

  countryService = inject(CountryService);
  query = signal(this.queryParam);

  countryResources = rxResource({
    request: () => ({
      query: this.query()
    }),
    loader: ({request}) => {
      if (!request.query) return of([]);

      this.router.navigate(['/country/country'], {
        queryParams: {
          query: request.query
        }
      });

      return this.countryService.searchByCountry(request.query)
    }
  })
}
