import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from './../../../environments/environment';
import { CreatorModel } from './../models/creator.model';

@Injectable({
  providedIn: 'root'
})
export class CreatorsResource {

  private creatorsUrl = `${environment.api}/creators?apikey=${environment.apiKey}`;

  constructor(private http: HttpClient) { }

  find(payload: number): Observable<CreatorModel[]> {
    return this.http.get<any>(`${this.creatorsUrl}&offset=${payload}`).pipe(
      map(res => res.data.results as CreatorModel[])
    );
  }

  findOne(payload: number): Observable<CreatorModel> {
    return this.http.get<CreatorModel>(`${this.creatorsUrl}/${payload}`);
  }

}
