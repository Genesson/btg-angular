import { Selector } from '@ngxs/store';

import { CreatorsState, CreatorsStateModel } from './creators.state';

export class CreatorsSelectors {

  @Selector([CreatorsState.isLoading])
  static isLoading(isLoading: CreatorsStateModel['isLoading']) {
    return isLoading;
  }

  @Selector([CreatorsState.creators])
  static creators(creators: CreatorsStateModel['creators']) {
    return creators;
  }

  @Selector([CreatorsState.selected])
  static selected(selected: CreatorsStateModel['selected']) {
    return selected;
  }

}
