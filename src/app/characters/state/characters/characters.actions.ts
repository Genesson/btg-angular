import { CharacterModel } from 'src/app/shared/models/character.model';

export class GetCharacters {
  static readonly type = '[Characters] Get all characters';

  constructor(public payload: number) { }
}

export class GetCharactersSuccess {
  static readonly type = '[Characters] Get all characters Success';

  constructor(public payload: CharacterModel[]) { }
}

export class GetCharactersError {
  static readonly type = '[Characters] Get all characters Error';

  constructor(public payload: string) { }
}

export class SelectCharacter {
  static readonly type = '[Characters] Select Character Success';

  constructor(public payload: CharacterModel) {
  }
}
