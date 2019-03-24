import { Component, OnInit } from '@angular/core';
import { IpDataServiceService } from './../../services/ip-data-service.service';

@Component({
  selector: 'app-ip-data-component',
  templateUrl: './ip-data-component.component.html',
  styleUrls: ['./ip-data-component.component.scss'],
  providers: [IpDataServiceService]
})
export class IpDataComponentComponent implements OnInit {
  public ipData: Array<any>;
  public ipDataIsLoaded: Boolean = false;

  constructor(protected ipDataService: IpDataServiceService) { }

  ngOnInit() {
    this.ipDataService.getIPData()
    .subscribe(
      ipData => {
        this.ipData = ipData;
        this.ipDataIsLoaded = true;
      }
    )
  }

}
