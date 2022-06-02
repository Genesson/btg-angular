import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { catchError, map } from 'rxjs/operators';
import { CreatorModel } from 'src/app/shared/models/creator.model';
import { CreatorsResource } from 'src/app/shared/resources/creator.resource';

import { GetCreators, GetCreatorsError, GetCreatorsSuccess } from './creators.actions';

export interface CreatorsStateModel {
  isLoading: boolean;
  creators: Array<CreatorModel>;
  selected: any;
}

@State<CreatorsStateModel>({
  name: 'creators',
  defaults: {
    isLoading: false,
    creators: [],
    selected: {}
  }
})
@Injectable()
export class CreatorsState {

  @Selector()
  static isLoading(state: CreatorsStateModel) {
    return state.isLoading;
  }

  @Selector()
  static creators(state: CreatorsStateModel) {
    return state.creators;
  }

  @Selector()
  static selected(state: CreatorsStateModel) {
    return state.selected;
  }

  constructor(private creatorsResource: CreatorsResource) { }

  @Action(GetCreators)
  getCreators(ctx: StateContext<CreatorsStateModel>, { payload }: any) {
    ctx.patchState({ isLoading: true });
    return this.creatorsResource.find(payload).pipe(
      map((data: Array<CreatorModel>) => ctx.dispatch(new GetCreatorsSuccess(data))),
      catchError((err) => ctx.dispatch(new GetCreatorsError(err)))
    );
  }

  @Action(GetCreatorsSuccess)
  getCreatorsSuccess(ctx: StateContext<CreatorsStateModel>, { payload }: GetCreatorsSuccess) {
    ctx.patchState({ creators: payload });
    ctx.patchState({ isLoading: false });
  }


  @Action(GetCreatorsError)
  getCreatorsError(ctx: StateContext<CreatorsStateModel>, { payload }: GetCreatorsError) {
    alert(payload);
    ctx.patchState({ isLoading: false });
  }

}
