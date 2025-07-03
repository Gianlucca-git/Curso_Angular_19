import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ResponseCountry} from '../interfaces/rest-country.interfaces';
import {map, Observable, catchError, throwError, delay, of, tap} from 'rxjs';
import type {CountryInfo} from '../interfaces/country.interfaces';
import {CountryMapper} from '../mappers/country.mapper';

const API = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private http = inject(HttpClient);
  private queryCacheCapital = new Map<string, CountryInfo[]>();
  private queryCacheCountry = new Map<string, CountryInfo[]>();
  private queryCacheRegion = new Map<string, CountryInfo[]>();

  searchByCountry(query: string): Observable<CountryInfo[]> {
    query = query.toLowerCase();

    if (this.queryCacheCountry.has(query)) {
      return of(this.queryCacheCountry.get(query) ?? []);
    }
    // console.log(' CONSULTANDO API COUNTRY')

    return this.http
      .get<ResponseCountry[]>(`${API}/name/${query}`)
      .pipe(
        map((restCountries) =>
          CountryMapper.mapApiToCountryInfoArray(restCountries)),
        tap(countries => this.queryCacheCountry.set(query, countries)),
        delay(1000),
        catchError(error => {
          console.log(error)
          return throwError(() => new Error('No countries found.'));
        })
      )
  }

  searchByCapital(query: string): Observable<CountryInfo[]> {
    query = query.toLowerCase();

    if (this.queryCacheCapital.has(query)) {
      return of(this.queryCacheCapital.get(query) ?? []);
    }
    // console.log(' CONSULTANDO API CAPITAL')

    return this.http
      .get<ResponseCountry[]>(`${API}/capital/${query}`)
      .pipe(
        map((restCountries) =>
          CountryMapper.mapApiToCountryInfoArray(restCountries)),
        // same code
        // map(CountryMapper.mapApiToCountryInfoArray) no funciona por el this
        tap(countries => this.queryCacheCapital.set(query, countries)),
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

  searchByRegion(region: string): Observable<CountryInfo[]> {
    if (this.queryCacheRegion.has(region)) {
      return of(this.queryCacheRegion.get(region) ?? []);
    }

    return this.http
      .get<ResponseCountry[]>(`${API}/region/${region}`)
      .pipe(
        map((restCountries) =>
          CountryMapper.mapApiToCountryInfoArray(restCountries)),
        tap(countries => this.queryCacheRegion.set(region, countries)),
        catchError(error => {
          console.log(error)
          return throwError(() => new Error('No countries by this region.'));
        })
      )
  }

}
