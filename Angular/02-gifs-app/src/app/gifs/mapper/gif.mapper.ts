import {GiphyResponse, GiphyResponseData} from '../interfaces/giphy.interface';
import {Gif} from '../interfaces/gif.interface';

export class GifMapper {

  static mapGiphyItemToGif(item: GiphyResponseData): Gif {
    return {
      id: item.id,
      title: item.title,
      url: item.images.original.url,
      // url: 'https://i.pinimg.com/736x/e7/44/fd/e744fd713c47fdcea1a324f4d12a532c.jpg',
    };
  }

  static mapGiphyItemsToGifArray(items: GiphyResponseData[]): Gif[] {
    return items.map(this.mapGiphyItemToGif);
  }
}
