import { CharacterResultModel } from "./character-result.model";

export class CharacterDataModel {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Array<CharacterResultModel>
}
