import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  //Con el HttpClient realizo la petición al api
  constructor(private _http: HttpClient) {

  }

  //Hago la petición para obterner los datos del api
  obtenerHeroes(): Observable<any> {
    return this._http.get('http://35.162.46.100/superheroes/',
      {
        headers: null
      }
    );
  }

}
