import { CharacterAssetsModel } from './character-assets.model';
import { CharacterThumbnailModel } from './character-thumbnail.model';
import { CharacterUrlModel } from './character-url.model';

export class CharacterResultModel {
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
