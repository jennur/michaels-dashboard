import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RandomJokeServiceService {
  private url = 'http://api.icndb.com/jokes/random';
  private conversionUrl = 'https://cors-anywhere.herokuapp.com';

  constructor(private http: Http) { }

  getRandomJoke(): Observable<any> {
    return this.http.get(this.conversionUrl +'/'+ this.url).pipe(
      map(response => {
         return response.json().value.joke;
      })
    );
  }
}
