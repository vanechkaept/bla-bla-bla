import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-material';

  toggleButton = true;
  todo: boolean;
  inputText = 'this new ';

  notif = 0;

  spinner = 20;

  opened = false;


  form = new FormGroup({
    emailFormControl : new FormControl({value: '', disabled: false},
      [Validators.required, Validators.email]),
    emailFormControlSecond: new FormControl({value: '', disabled: false},
      [Validators.required, Validators.max(999), Validators.min(10)])
  });



  // form = new FormGroup({
  //   emailFormControl: new FormControl({value: '', disabled: false}, [Validators.required ,Validators.email]),

  // });
  // emailFormControl = new FormControl( 'sd', [Validators.required,Validators.email]);







  ngOnInit(): void {
    setTimeout(() => {
      this.toggleButton = true;
      console.log(this.todo);

    }, 1000 );
  }


  add() {

    this.spinner += 10;

    if (this.spinner > 100 ){
      this.spinner = 0;
    }
  }











}
