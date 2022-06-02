import { Selector } from '@ngxs/store';

import { ComicsState, ComicsStateModel } from './comics.state';

export class ComicsSelectors {

  @Selector([ComicsState.isLoading])
  static isLoading(isLoading: ComicsStateModel['isLoading']) {
    return isLoading;
  }

  @Selector([ComicsState.comics])
  static comics(comics: ComicsStateModel['comics']) {
    return comics;
  }

  @Selector([ComicsState.selected])
  static selected(selected: ComicsStateModel['selected']) {
    return selected;
  }

}
