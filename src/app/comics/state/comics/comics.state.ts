import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { catchError, map } from 'rxjs/operators';
import { ComicModel } from 'src/app/shared/models/comic.model';
import { ComicsResource } from 'src/app/shared/resources/comic.resource';

import { GetComics, GetComicsError, GetComicsSuccess } from './comics.actions';

export interface ComicsStateModel {
  isLoading: boolean;
  comics: Array<ComicModel>;
  selected: any;
}

@State<ComicsStateModel>({
  name: 'comics',
  defaults: {
    isLoading: false,
    comics: [],
    selected: {}
  }
})
@Injectable()
export class ComicsState {

  @Selector()
  static isLoading(state: ComicsStateModel) {
    return state.isLoading;
  }

  @Selector()
  static comics(state: ComicsStateModel) {
    return state.comics;
  }

  @Selector()
  static selected(state: ComicsStateModel) {
    return state.selected;
  }

  constructor(private comicsResource: ComicsResource) { }

  @Action(GetComics)
  getComics(ctx: StateContext<ComicsStateModel>, { payload }: any) {
    ctx.patchState({ isLoading: true });
    return this.comicsResource.find(payload).pipe(
      map((data: Array<ComicModel>) => ctx.dispatch(new GetComicsSuccess(data))),
      catchError((err) => ctx.dispatch(new GetComicsError(err)))
    );
  }

  @Action(GetComicsSuccess)
  getComicsSuccess(ctx: StateContext<ComicsStateModel>, { payload }: GetComicsSuccess) {
    ctx.patchState({ comics: payload });
    ctx.patchState({ isLoading: false });
  }


  @Action(GetComicsError)
  getComicsError(ctx: StateContext<ComicsStateModel>, { payload }: GetComicsError) {
    alert(payload);
    ctx.patchState({ isLoading: false });
  }

}
