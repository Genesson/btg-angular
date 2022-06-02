import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { ComicModel } from '../shared/models/comic.model';
import { GetComics, SelectComic } from './state/comics/comics.actions';
import { ComicsSelectors } from './state/comics/comics.selectors';
import { ComicsState } from './state/comics/comics.state';

@Injectable({
  providedIn: 'root'
})
export class ComicsSandbox {

  @Select(ComicsSelectors.isLoading) isLoading$: Observable<boolean>;

  @Select(ComicsSelectors.selected) selected$: Observable<ComicModel>;

  @Select(ComicsState.comics) comics$: Observable<Array<ComicModel>>;

  constructor(private store: Store) { }

  getComics(offset: number) {
    this.store.dispatch(new GetComics(offset));
  }

  selectComic(comic: ComicModel) {
    this.store.dispatch(new SelectComic(comic));
  }

}
