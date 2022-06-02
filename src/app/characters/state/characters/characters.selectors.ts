import { Selector } from '@ngxs/store';

import { CharactersState, CharactersStateModel } from './characters.state';

export class CharactersSelectors {

  @Selector([CharactersState.isLoading])
  static isLoading(isLoading: CharactersStateModel['isLoading']) {
    return isLoading;
  }

  @Selector([CharactersState.characters])
  static characters(characters: CharactersStateModel['characters']) {
    return characters;
  }

  @Selector([CharactersState.selected])
  static selected(selected: CharactersStateModel['selected']) {
    return selected;
  }

}
