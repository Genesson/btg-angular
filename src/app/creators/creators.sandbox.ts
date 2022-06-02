import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { CreatorModel } from '../shared/models/creator.model';
import { GetCreators, SelectCreator } from './state/creators/creators.actions';
import { CreatorsSelectors } from './state/creators/creators.selectors';
import { CreatorsState } from './state/creators/creators.state';

@Injectable({
  providedIn: 'root'
})
export class CreatorsSandbox {

  @Select(CreatorsSelectors.isLoading) isLoading$: Observable<boolean>;

  @Select(CreatorsSelectors.selected) selected$: Observable<CreatorModel>;

  @Select(CreatorsState.creators) creators$: Observable<Array<CreatorModel>>;

  constructor(private store: Store) { }

  getCreators(offset: number) {
    this.store.dispatch(new GetCreators(offset));
  }

  selectCreator(creator: CreatorModel) {
    this.store.dispatch(new SelectCreator(creator));
  }

}
