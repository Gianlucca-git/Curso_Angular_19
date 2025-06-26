import {GiphyResponse, GiphyResponseData} from '../interfaces/giphy.interface';
import {Gif} from '../interfaces/gif.interface';

export class GifMapper {

  static mapGiphyItemToGif(item: GiphyResponseData): Gif {
    return {
      id: item.id,
      title: item.title,
      url: item.images.original.url,
    };
  }

  static mapGiphyItemsToGifArray(items: GiphyResponseData[]): Gif[] {
    return items.map(this.mapGiphyItemToGif);
  }
}
