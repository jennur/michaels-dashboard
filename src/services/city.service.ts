import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  public city: String;
  public location: any;
  private url = 'https://www.metaweather.com/api/location/search/?lattlong=';
  private conversionUrl = 'https://cors-anywhere.herokuapp.com';

  constructor(private http: Http) {
  }
  getLocation(getNearestCities) {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.location = position.coords.latitude + ',' + position.coords.longitude;
        getNearestCities(this.location);
      })
    } else {
      console.log("Error loading location");
    }
  }
  getCityData(location: any): Observable<any> {
    return this.http.get(this.conversionUrl + '/' + this.url + location).pipe(
      map(response => {
        this.city = response.json()[0].title;
        return response.json();
      })
    )
  }
}
