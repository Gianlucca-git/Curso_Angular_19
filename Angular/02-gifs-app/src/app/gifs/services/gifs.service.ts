import {computed, effect, inject, Injectable, signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "@environments/environment.development";
import type {GiphyResponse} from '../interfaces/giphy.interface';
import {Gif} from '../interfaces/gif.interface';
import {GifMapper} from '../mapper/gif.mapper';
import {map, tap} from 'rxjs';

const GIF_KEY = 'gifs';
const loadFromLocalStorage = () => {
  const local = localStorage.getItem(GIF_KEY) ?? '{}';
  return JSON.parse(local);
}

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(true);

  searchHistory = signal<Record<string, Gif[]>>(loadFromLocalStorage());
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

  constructor() {
    this.loadTrendingGifs();
  }

  loadTrendingGifs() {
    this.http.get<GiphyResponse>(`${environment.apiUrlGiphy}/gifs/trending`, {
      params: {
        api_key: environment.apiKeyGiphy,
        limit: 20,
      }
    }).subscribe(
      (response) => {
        const gifs = GifMapper.mapGiphyItemsToGifArray(response.data)

        this.trendingGifs.set(gifs);
        this.trendingGifsLoading.set(false);
        console.log('HOLA DESDE loadTrendingGifs');

      }
    )
  }

  searchGifs(query: string) {
    return this.http.get<GiphyResponse>(`${environment.apiUrlGiphy}/gifs/search`, {
      params: {
        api_key: environment.apiKeyGiphy,
        limit: 20,
        q: query
      },
    }).pipe(
      map(({data}) => data),
      map((items) => GifMapper.mapGiphyItemsToGifArray(items)),
      tap(items => {
        this.searchHistory.update(history => ({
          ...history,
          [query.toLowerCase()]: items,
        }))
      })
    );
  }

  getHistoryGifs(query: string): Gif[] {
    return this.searchHistory()[query] ?? [];
  }

  saveGifsToLocalStorage = effect(() => {
    const historyString = JSON.stringify(this.searchHistory());
    localStorage.setItem(GIF_KEY, historyString);
  })
}
