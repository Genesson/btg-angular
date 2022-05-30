import { CharacterItemModel } from './character-item.model';

export class CharacterAssetsModel {
  available: number;
  returned: number;
  collectionURI: string;
  items: Array<CharacterItemModel>;
}
