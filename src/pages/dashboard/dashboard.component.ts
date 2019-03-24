import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public username: String = localStorage.getItem('Username');
  constructor(protected router: Router) { }

  ngOnInit() {
    if(!sessionStorage.getItem('AuthToken')) {
      this.router.navigate(['/']);
    }
  }


}
