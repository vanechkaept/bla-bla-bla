import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../interfaces/task';
import { map } from 'rxjs/internal/operators/map';
import { Observable } from 'rxjs/internal/Observable';
import * as moment from 'moment';

interface CreateResponce {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class CalendarTaskService {

  url =  'https://angular-calendar-f49af.firebaseio.com/tasks'

  constructor(
    private http: HttpClient
  ){}


  load(date: moment.Moment): Observable<Task[]>{
    return this.http.get<Task[]>(`${this.url}/${date.format('DD-MM-YYYY')}.json`).pipe(
      map( tasks => {
        if(!tasks){
          return []
        } else {
          return Object.keys(tasks).map( key => ({...tasks[key], id: key}))
        }
      })
    )
  }


  create(task: Task): Observable<Task>{
    return this.http.post<CreateResponce>(`${this.url}/${task.date}.json`, task).pipe(
      map(res =>{
        return {...task , id: res.name}
      } )
    )
  }

  remove(task: Task): Observable<void>{
    return this.http.delete<void>(`${this.url}/${task.date}/${task.id}.json`)
  }

}
