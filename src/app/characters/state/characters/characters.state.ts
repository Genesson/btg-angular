import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { catchError, map } from 'rxjs/operators';
import { CharacterModel } from 'src/app/shared/models/character.model';
import { CharactersResource } from 'src/app/shared/resources/character.resource';

import { GetCharacters, GetCharactersError, GetCharactersSuccess } from './characters.actions';

export interface CharactersStateModel {
  isLoading: boolean;
  characters: Array<CharacterModel>;
}

@State<CharactersStateModel>({
  name: 'characters',
  defaults: {
    isLoading: false,
    characters: []
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

  constructor(private charactersResource: CharactersResource) { }

  @Action(GetCharacters)
  getCharacters(ctx: StateContext<CharactersStateModel>) {
    ctx.patchState({ isLoading: true });
    return this.charactersResource.find().pipe(
      map((data: Array<CharacterModel>) => ctx.dispatch(new GetCharactersSuccess(data))),
      catchError((err) => ctx.dispatch(new GetCharactersError(err)))
    );
  }

  @Action(GetCharactersSuccess)
  getCharactersSuccess(ctx: StateContext<CharactersStateModel>, { payload }: GetCharactersSuccess) {
    ctx.patchState({ characters: payload });
  }


  @Action(GetCharactersError)
  getCharactersError(ctx: StateContext<CharactersStateModel>, { payload }: GetCharactersError) {
    alert(payload);
    ctx.patchState({ isLoading: false });
  }

}
