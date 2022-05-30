import { CharacterModel } from './../../../shared/models/character.model';

export class GetCharacters {
  static readonly type = '[Characters] Get all characters';
}

export class GetCharactersSuccess {
  static readonly type = '[Characters] Get all characters Success';
  constructor(public payload: CharacterModel[]) { }
}

export class GetCharactersError {
  static readonly type = '[Characters] Get all characters Error';
  constructor(public payload: string) { }
}

