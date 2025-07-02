import {Component, inject, resource, signal} from '@angular/core';
import {SearchInputComponent} from '../../components/search-input/search-input.component';
import {CountryListComponent} from '../../components/country-list/country-list.component';
import {CountryService} from '../../services/country.service';
import {CountryInfo} from '../../interfaces/country.interfaces';
import {first, firstValueFrom} from 'rxjs';

@Component({
  selector: 'app-by-capital-page',
  imports: [
    SearchInputComponent,
    CountryListComponent,
  ],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {

  countryService = inject(CountryService);
  query = signal('');

  countryResources = resource({
    request: () => ({
      query: this.query()
    }),
    loader: async ({request}) => {
      if (!request.query) return [];
      // return this.countryService.searchByCapital(request.query);
      return await firstValueFrom(
        this.countryService.searchByCapital(request.query)
      );
    }
  })

  // Angular version <= 18
  // isLoading = signal(false);
  // isError = signal<string | null>(null);
  // countries = signal<CountryInfo[]>([]);
  //
  // onSearch(query: string): void {
  //
  //   if (this.isLoading()) return;
  //   this.isLoading.set(true);
  //
  //   this.countryService.searchByCapital(query).subscribe({
  //       next: countries => {
  //         this.isLoading.set(false);
  //         this.countries.set(countries);
  //         // console.log(countries);
  //       },
  //       error: err => {
  //         this.isLoading.set(false);
  //         this.countries.set([]);
  //         // this.isError.set('No countries found by this capital.');
  //         this.isError.set(err);
  //       }
  //     }
  //   )
  // }


}
