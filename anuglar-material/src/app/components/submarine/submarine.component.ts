import { Observable } from 'rxjs/internal/Observable';
import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { timer } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-submarine',
  templateUrl: './submarine.component.html',
  styleUrls: ['./submarine.component.scss'],
  animations: [

  ]
})
export class SubmarineComponent implements OnInit {

  winCombinationFirst: number;
  win$: Observable<number>;


  constructor() { }

  ngOnInit() {


    this.win$ = timer(0, 3000).pipe(
      tap( event =>  {
        console.log(event);
        if (event === 10) {
          event = 0;
        }
        event++ ;

      } ),
     );
  }

}
