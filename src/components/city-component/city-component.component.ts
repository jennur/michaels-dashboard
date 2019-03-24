import { Component, OnInit } from '@angular/core';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-city-component',
  templateUrl: './city-component.component.html',
  styleUrls: ['./city-component.component.scss'],
  providers: [CityService]
})
export class CityComponentComponent implements OnInit {
  public city: String = this.cityService.city;
  public cities: Array<any>;

  constructor(protected cityService: CityService) { }

  ngOnInit() {
    this.cityService.getLocation(position => this.getNearestCities(position));

  }
  getNearestCities(position) {
    this.cityService.getCityData(position)
    .subscribe(
      cities => {
        this.cities = cities;
      }
    )
  }
}
