export class CreatorUrlModel {
  type: string;
  url: string;
}

export class CreatorThumbnailModel {
  path: string;
  extension: string;
}

export class CreatorItemModel {
  resourceURI: string;
  name: string;
  type?: string;
}

export class CreatorAssetsModel {
  available: number;
  returned: number;
  collectionURI: string;
  items: Array<CreatorItemModel>;
}

export class CreatorModel {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  suffix: string;
  fullName: string;
  modified: string;
  resourceURI: string;
  urls: Array<CreatorUrlModel>;
  thumbnail: CreatorThumbnailModel;
  series: CreatorAssetsModel;
  stories: CreatorAssetsModel;
  comics: CreatorAssetsModel;
  events: CreatorAssetsModel;
}
