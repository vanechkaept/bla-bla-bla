import { DateService } from './../../../shared/services/date.service';
import { Component, OnInit } from '@angular/core';
import { Week } from 'src/app/shared/interfaces/week';
import { Day } from 'src/app/shared/interfaces/day';
import * as moment from 'moment';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  calendar: Week[];

  cl: any;

  constructor(
    private dateService: DateService
  ) { }

  ngOnInit() {
    this.dateService.date.subscribe(this.generate.bind(this));
  }

  generate(now: moment.Moment){
    console.log(now.format('YYYY MM DD'));

    const startDay = now.clone().startOf('months').startOf('week');
    const endDay = now.clone().endOf('month').endOf('week').add(1,'day');
    const date = startDay.clone();
    const isNow = moment();

    const calendar = [];


    while (date.isBefore(endDay, 'day')){

      calendar.push({
        value: date.clone(),
        now: this.isNow(date.clone() ),
        selected: this.isSelected(now, date.clone()),
        disabled: this.isDisabled(now.clone(), date.clone())
      });
      date.add(1, 'day');
    }

    console.log(calendar);
    this.cl = calendar;
  }

  isNow(date){
    return date.isSame(moment() , 'date')
  }

  isSelected(now: moment.Moment , date: moment.Moment): boolean{
    // console.log(now.format('YYYY MM DD'));
    // console.log(date.format('YYYY MM DD'));
    // console.log('------');
    return now.isSame(date, 'date')
  }

  isDisabled(now: moment.Moment, date: moment.Moment): boolean{
    return !now.startOf('month').isSame(date, 'month');
  }


  selectDay(day: Day){

    console.log(day);

    this.cl.forEach( (day: Day) => {
      day.selected = false;
    });
    day.selected = true;

    this.dateService.changeDate(day.value);

  }

}
