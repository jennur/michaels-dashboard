import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnChanges {
  @Output() userDetailsObj: EventEmitter<object> = new EventEmitter();
  form: any;

  @Input() isUsername: boolean;
  @Input() isPassword: boolean;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    });
  }

  ngOnChanges(changes: SimpleChanges) { }

  public userDetails(formValues: any) {
    this.userDetailsObj.emit(formValues);
  }
}
