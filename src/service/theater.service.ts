import { Injectable }    from '@angular/core';
import { Headers } from '@angular/http';

import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TheaterService {
  public theater: any;
  //private ApiBaseUrl = 'http://192.168.1.52:8080/api/';  // URL to web api
  private ApiBaseUrl = 'https://cinebuddy-api.herokuapp.com/api/';  // URL to web api
  private headers = new Headers({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });

  constructor(private _authHttp: AuthHttp) { }

  getTheaterList(lat:number, lng:number, movie?:any): any {
    return this._authHttp
      .get(this.ApiBaseUrl + 'theatercloseby/?lat=' + lat +'&lng=' + lng +'&radius=20', {headers: this.headers})
        .map( theaters => theaters.json())
  }

  /*getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json().data as Hero[])
               .catch(this.handleError);
  }

  create(name: string): Promise<Hero>{
    return this.http
      .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }*/


}
