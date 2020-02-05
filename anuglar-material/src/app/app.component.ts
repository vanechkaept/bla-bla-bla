import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
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

  startDate = new Date();


  toggleButton = true;
  todo: boolean;
  inputText = 'this new ';
  notif = 0;
  spinner = 20;
  tabRef: string | number;
  opened = true;
  selected: any;


  selectedList = [
    {value: 'dog'},
    {value: 'cat'},
    {value: 'mouse'},
  ];

  selectedNum: number;
  FirstName = new FormControl({value: '', disabled: false},
    [Validators.required, Validators.maxLength(7)]);


  minDate = new Date();

  dateFilter = date => {
    const day = date.getDay();
    return day !== 0 && day !== 6 ;
  }
  // form = new FormGroup({
  //   emailFormControl : new FormControl({value: '', disabled: false},
  //     [Validators.required, Validators.email]),
  //   emailFormControlSecond: new FormControl({value: '', disabled: false},
  //     [Validators.required, Validators.max(999), Validators.min(10)])
  // });
  // form = new FormGroup({
  //   emailFormControl: new FormControl({value: '', disabled: false}, [Validators.required ,Validators.email]),

  // });
  // emailFormControl = new FormControl( 'sd', [Validators.required,Validators.email]);



  constructor(private snackBar: MatSnackBar) {}


  openSnackBar(message, action) {
    const snackBarRef = this.snackBar.open(message, action, {duration: 2000});
    // this.snackBar.open(message, action);
    snackBarRef.afterDismissed().subscribe(() => {
      console.log('The snackbar was dismiss');
    });
    snackBarRef.onAction().subscribe(() => {
      console.log('The snackbar was Triggere');
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.toggleButton = true;
      console.log(this.todo);

    }, 1000 );



  }


  add() {
    this.spinner += 10;
    if (this.spinner > 100 ) {
      this.spinner = 0;
    }
  }

  tabClick(tabRef) {
    console.log(tabRef.selectedIndex);
    this.tabRef = tabRef.selectedIndex;
    console.log(this.tabRef);
  }


  create(selected) {
     switch (selected) {
       case 'dog': {this.selectedNum = 1; break; }
       case 'cat': {this.selectedNum = 2; break; }
       case 'mouse': {this.selectedNum = 3; break; }
       default: break;
     }


  }











}
