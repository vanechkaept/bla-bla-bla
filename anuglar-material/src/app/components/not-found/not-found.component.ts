import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  timenow: Date;
  newtime: string;

  // tslint:disable-next-line: variable-name


  @Input() myFriend: string;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onClick = new EventEmitter();




  constructor() {

  }

  ngOnInit() {

    const view = document.querySelector('.text__block');
    view.addEventListener( 'focus', this.toTime );
    console.log(view);
    let con = this.toTime();

    console.log(con);

  }

  toTime() {
    // this.newtime = this.timenow.toISOString();
    console.log('tut');
    return 1;
  }


  add(){
  }



}
