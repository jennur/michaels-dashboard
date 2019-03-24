import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RandomAdviceServiceService {

  constructor(private http: Http) { }

  getRandomAdvice(): Observable<any> {
    return this.http.get('https://api.adviceslip.com/advice').pipe(
      map(response => {
        return response.json().slip.advice;
      })
    )
  }
}
