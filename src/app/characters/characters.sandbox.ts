import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { CharacterModel } from '../shared/models/character.model';
import { GetCharacters, SelectCharacter } from './state/characters/characters.actions';
import { CharactersSelectors } from './state/characters/characters.selectors';
import { CharactersState } from './state/characters/characters.state';

@Injectable({
  providedIn: 'root'
})
export class CharactersSandbox {

  @Select(CharactersSelectors.isLoading) isLoading$: Observable<boolean>;

  @Select(CharactersSelectors.selected) selected$: Observable<CharacterModel>;

  @Select(CharactersState.characters) characters$: Observable<Array<CharacterModel>>;

  constructor(private store: Store) { }

  getCharacters(offset: number) {
    this.store.dispatch(new GetCharacters(offset));
  }

  selectCharacter(character: CharacterModel) {
    this.store.dispatch(new SelectCharacter(character));
  }

}
