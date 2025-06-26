export interface Original {
  url: string;
}

export interface Images {
  original: Original;
}

export interface GiphyResponseData {
  type: string;
  id: string;
  title: string;
  images: Images;
}

export interface GiphyResponse {
  data: GiphyResponseData[];
}
