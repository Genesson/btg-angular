import { CharacterDataModel } from './character-data.model';

export class CharacterModel {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: CharacterDataModel;
  etag: string
}
