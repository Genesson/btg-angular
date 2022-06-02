export class CharacterUrlModel {
  type: string;
  url: string;
}

export class CharacterThumbnailModel {
  path: string;
  extension: string;
}

export class CharacterItemModel {
  resourceURI: string;
  name: string;
  type?: string;
}

export class CharacterAssetsModel {
  available: number;
  returned: number;
  collectionURI: string;
  items: Array<CharacterItemModel>;
}

export class CharacterModel {
  id: number;
  name: string;
  description: string;
  modified: Date;
  resourceURI: string;
  urls: Array<CharacterUrlModel>;
  thumbnail: CharacterThumbnailModel;
  comics: CharacterAssetsModel;
  stories: CharacterAssetsModel;
  events: CharacterAssetsModel;
  series: CharacterAssetsModel;
}
