import { ComicModel } from 'src/app/shared/models/comic.model';

export class GetComics {
  static readonly type = '[Comics] Get all comics';

  constructor(public payload: number) { }
}

export class GetComicsSuccess {
  static readonly type = '[Comics] Get all comics Success';

  constructor(public payload: ComicModel[]) { }
}

export class GetComicsError {
  static readonly type = '[Comics] Get all comics Error';

  constructor(public payload: string) { }
}

export class SelectComic {
  static readonly type = '[Comics] Select comic Success';

  constructor(public payload: ComicModel) {
  }
}
