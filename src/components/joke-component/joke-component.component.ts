import { Component, OnInit } from '@angular/core';
import { RandomJokeServiceService } from './../../services/random-joke-service.service';

@Component({
  selector: 'app-joke-component',
  templateUrl: './joke-component.component.html',
  styleUrls: ['./joke-component.component.scss'],
  providers: [RandomJokeServiceService]
})
export class JokeComponentComponent implements OnInit {
  public randomJoke: String;

  constructor(protected randomJokeService: RandomJokeServiceService) { }

  ngOnInit() {
    this.randomJokeService.getRandomJoke()
    .subscribe(
      joke => {
        this.randomJoke = joke;
      }
    )
  }

}
