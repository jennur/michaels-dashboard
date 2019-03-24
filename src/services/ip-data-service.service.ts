import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IpDataServiceService {
  constructor(private http: Http) { }

  getIPData(): Observable<any> {
    return this.http.get(
      'https://ipinfo.io?token='
    + '51bdead78d7b03').pipe(
      map(response => {
        return response.json();
      })
    )
  }
}
