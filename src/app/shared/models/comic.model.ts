export class ComicUrlModel {
  type: string;
  url: string;
}

export class ComicDateModel {
  type: string;
  date: Date;
}

export class ComicPriceModel {
  type: string;
  price: number;
}

export class ComicThumbnailModel {
  path: string;
  extension: string;
}

export class ComicItemModel {
  resourceURI: string;
  name: string;
  type?: string;
}

export class ComicAssetsModel {
  available: number;
  returned: number;
  collectionURI: string;
  items: Array<ComicItemModel>;
}

export class ComicModel {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: Date;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: Array<string>;
  resourceURI: string;
  urls: Array<ComicUrlModel>;
  series: ComicItemModel;
  variants: Array<ComicItemModel>;
  collections: Array<ComicItemModel>;
  collectedIssues: Array<ComicItemModel>;
  dates: Array<ComicDateModel>;
  prices: Array<ComicPriceModel>;
  thumbnail: ComicThumbnailModel;
  images: Array<ComicThumbnailModel>;
  creators: ComicAssetsModel;
  characters: ComicAssetsModel;
  stories: ComicAssetsModel;
  events: ComicAssetsModel;
}
