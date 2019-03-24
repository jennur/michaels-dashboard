import { Component, OnInit } from '@angular/core';
import { RandomAdviceServiceService } from './../../services/random-advice-service.service';

@Component({
  selector: 'app-advice-component',
  templateUrl: './advice-component.component.html',
  styleUrls: ['./advice-component.component.scss'],
  providers: [RandomAdviceServiceService]
})
export class AdviceComponentComponent implements OnInit {
  public randomAdvice: String;

  constructor(protected randomAdviceService: RandomAdviceServiceService) { }

  ngOnInit() {
    this.randomAdviceService.getRandomAdvice()
    .subscribe(
      advice => {
        this.randomAdvice = advice;
      }
    )
  }

}
