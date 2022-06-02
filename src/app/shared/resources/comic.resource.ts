import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from './../../../environments/environment';
import { ComicModel } from './../models/comic.model';

@Injectable({
  providedIn: 'root'
})
export class ComicsResource {

  private comicsUrl = `${environment.api}/comics?apikey=${environment.apiKey}`;

  constructor(private http: HttpClient) { }

  find(payload: number): Observable<ComicModel[]> {
    return this.http.get<any>(`${this.comicsUrl}&offset=${payload}`).pipe(
      map(res => res.data.results as ComicModel[])
    );
  }

  findOne(payload: number): Observable<ComicModel> {
    return this.http.get<ComicModel>(`${this.comicsUrl}/${payload}`);
  }

}
