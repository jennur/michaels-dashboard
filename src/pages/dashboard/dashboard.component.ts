import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IpDataServiceService } from './../../services/ip-data-service.service';
import { CityService } from '../../services/city.service';
import 'rxjs';
import { RandomJokeServiceService } from './../../services/random-joke-service.service';
import { RandomAdviceServiceService } from './../../services/random-advice-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [IpDataServiceService, CityService, RandomJokeServiceService, RandomAdviceServiceService],
})
export class DashboardComponent implements OnInit {
  public cities: Array<any>;
  public randomJoke: String;
  public ipData: Array<any>;
  public randomAdvice: String;
  public city: String = this.cityService.city;
  public username: String = localStorage.getItem('Username');
  public ipDataIsLoaded: Boolean = false;
  constructor(
    protected router: Router,
    protected cityService: CityService,
    protected randomJokeService: RandomJokeServiceService,
    protected ipDataService: IpDataServiceService,
    protected randomAdviceService: RandomAdviceServiceService
  ) { }

  ngOnInit() {
    if(!sessionStorage.getItem('AuthToken')) {
      this.router.navigate(['/']);
    }
    this.ipDataService.getIPData()
    .subscribe(
      ipData => {
        this.ipData = ipData;
        this.ipDataIsLoaded = true;
      }
    )
    this.cityService.getLocation(position => this.getNearestCities(position));

    this.randomJokeService.getRandomJoke()
    .subscribe(
      joke => {
        this.randomJoke = joke;
      }
    )
    this.randomAdviceService.getRandomAdvice()
    .subscribe(
      advice => {
        this.randomAdvice = advice;
      }
    )
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
