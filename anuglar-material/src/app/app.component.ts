
import {Component, OnInit, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';

export interface StateGroup {
  letter: string;
  names: string[];
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ng = 'Angular';
  result = '';

  upCase(st: string): void {
    this.result = 'This is the app component. I received a string \'' + st + '\' from the hello component'
    + ' and I capitalize it here ' + st.toUpperCase();
  }

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {

  }



}
