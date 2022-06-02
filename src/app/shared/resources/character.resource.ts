import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from './../../../environments/environment';
import { CharacterModel } from './../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersResource {

  private charactersUrl = `${environment.api}/characters?apikey=${environment.apiKey}`;

  constructor(private http: HttpClient) { }

  find(payload: number): Observable<CharacterModel[]> {
    return this.http.get<any>(`${this.charactersUrl}&offset=${payload}`).pipe(
      map(res => res.data.results as CharacterModel[])
    );
  }

  findOne(payload: number): Observable<CharacterModel> {
    return this.http.get<CharacterModel>(`${this.charactersUrl}/${payload}`);
  }

}
