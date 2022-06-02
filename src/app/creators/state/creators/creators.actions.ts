import { CreatorModel } from 'src/app/shared/models/creator.model';

export class GetCreators {
  static readonly type = '[Creators] Get all creators';

  constructor(public payload: number) { }
}

export class GetCreatorsSuccess {
  static readonly type = '[Creators] Get all creators Success';

  constructor(public payload: CreatorModel[]) { }
}

export class GetCreatorsError {
  static readonly type = '[Creators] Get all creators Error';

  constructor(public payload: string) { }
}

export class SelectCreator {
  static readonly type = '[Creators] Select Creator Success';

  constructor(public payload: CreatorModel) {
  }
}

