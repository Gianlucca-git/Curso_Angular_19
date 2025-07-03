import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ResponseCountry} from '../interfaces/rest-country.interfaces';
import {map, Observable, catchError, throwError, delay, of} from 'rxjs';
import type {CountryInfo} from '../interfaces/country.interfaces';
import {CountryMapper} from '../mappers/country.mapper';

const API = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private http = inject(HttpClient);

  searchByCountry(query: string): Observable<CountryInfo[]> {
    query = query.toLowerCase();
    return this.http
      .get<ResponseCountry[]>(`${API}/name/${query}`)
      .pipe(
        map((restCountries) =>
          CountryMapper.mapApiToCountryInfoArray(restCountries)),
        delay(1000),
        catchError(error => {
          console.log(error)
          return throwError(() => new Error('No countries found.'));
        })
      )
  }

  searchByCapital(query: string): Observable<CountryInfo[]> {
    query = query.toLowerCase();
    return this.http
      .get<ResponseCountry[]>(`${API}/capital/${query}`)
      .pipe(
        map((restCountries) =>
          CountryMapper.mapApiToCountryInfoArray(restCountries)),
        // same code
        // map(CountryMapper.mapApiToCountryInfoArray) no funciona por el this
        delay(1000),
        catchError(error => {
          console.log(error)
          return throwError(() => new Error('No countries found by this capital.'));
        })
      )
  }

  searchCountryByCode(code: string) {

    return this.http
      .get<ResponseCountry[]>(`${API}/alpha/${code}`)
      .pipe(
        map((restCountries) =>
          CountryMapper.mapApiToCountryInfoArray(restCountries)),
        map(countries => countries.at(0)),
        catchError(error => {
          return throwError(() => new Error('No countries found by code.'));
        })
      )
  }
}
