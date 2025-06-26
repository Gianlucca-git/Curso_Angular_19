import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "@environments/environment.development";
import type {GiphyResponse} from '../interfaces/giphy.interface';
import {Gif} from '../interfaces/gif.interface';
import {GifMapper} from '../mapper/gif.mapper';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(true);

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
        console.log(gifs);

      }
    )
  }
}
