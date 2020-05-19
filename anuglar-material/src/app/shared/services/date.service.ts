import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import * as moment from 'moment'

@Injectable({
  providedIn: 'root'
})

export class DateService {
  public date: BehaviorSubject<moment.Moment> = new BehaviorSubject(moment())

  changeMonth(move: number){
    const value = this.date.value.add(move, 'month');
    this.date.next(value);
  }

  changeDate(date){
    // const value = this.date.value.
    this.date.next(date);

  }

}
