import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { CharacterModel } from '../shared/models/character.model';
import { GetCharacters } from './state/characters/characters.actions';
import { CharactersSelectors } from './state/characters/characters.selectors';
import { CharactersState } from './state/characters/characters.state';

@Injectable({
  providedIn: 'root'
})
export class CharactersSandbox {

  @Select(CharactersSelectors.isLoading) isLoading$: Observable<boolean>;

  @Select(CharactersState.characters) characters$: Observable<Array<CharacterModel>>;

  constructor(private store: Store) { }

  getCharacters() {
    this.store.dispatch(new GetCharacters());
  }

}
