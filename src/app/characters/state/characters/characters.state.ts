import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { catchError, map } from 'rxjs/operators';
import { CharacterModel } from 'src/app/shared/models/character.model';
import { CharactersResource } from 'src/app/shared/resources/character.resource';

import { GetCharacters, GetCharactersError, GetCharactersSuccess, SelectCharacter } from './characters.actions';

export interface CharactersStateModel {
  isLoading: boolean;
  characters: Array<CharacterModel>;
  selected: any;
}

@State<CharactersStateModel>({
  name: 'characters',
  defaults: {
    isLoading: false,
    characters: [],
    selected: {}
  }
})
@Injectable()
export class CharactersState {

  @Selector()
  static isLoading(state: CharactersStateModel) {
    return state.isLoading;
  }

  @Selector()
  static characters(state: CharactersStateModel) {
    return state.characters;
  }

  @Selector()
  static selected(state: CharactersStateModel) {
    return state.selected;
  }

  constructor(private charactersResource: CharactersResource) { }

  @Action(SelectCharacter)
  selectPet(ctx: StateContext<CharactersStateModel>, { payload }: SelectCharacter) {
    ctx.patchState({ selected: payload });
  }

  @Action(GetCharacters)
  getCharacters(ctx: StateContext<CharactersStateModel>, { payload }: any) {
    ctx.patchState({ isLoading: true });
    return this.charactersResource.find(payload).pipe(
      map((data: Array<CharacterModel>) => ctx.dispatch(new GetCharactersSuccess(data))),
      catchError((err) => ctx.dispatch(new GetCharactersError(err)))
    );
  }

  @Action(GetCharactersSuccess)
  getCharactersSuccess(ctx: StateContext<CharactersStateModel>, { payload }: GetCharactersSuccess) {
    ctx.patchState({ characters: payload });
    ctx.patchState({ isLoading: false });
  }


  @Action(GetCharactersError)
  getCharactersError(ctx: StateContext<CharactersStateModel>, { payload }: GetCharactersError) {
    alert(payload);
    ctx.patchState({ isLoading: false });
  }

}
