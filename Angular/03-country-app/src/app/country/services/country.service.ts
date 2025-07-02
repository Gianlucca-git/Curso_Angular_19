import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ResponseCountry} from '../interfaces/rest-country.interfaces';
import {map, Observable} from 'rxjs';
import type {CountryInfo} from '../interfaces/country.interfaces';
import {CountryMapper} from '../mappers/country.mapper';

const API = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private http = inject(HttpClient);

  searchByCapital(query: string): Observable<CountryInfo[]> {
    query = query.toLowerCase();
    return this.http
      .get<ResponseCountry[]>(`${API}/capital/${query}`)
      .pipe(
        map((restCountries) =>
          CountryMapper.mapApiToCountryInfoArray(restCountries))
        // same code
        // map(CountryMapper.mapApiToCountryInfoArray) no funciona por el this
      )
  }
}
