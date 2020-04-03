import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../interfaces/user';
import { USERS, LIST } from '../arrays/mock-users';



@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }


  getUsers(): Observable<User[]> {
    return of(USERS);
  }

  getLastShopList(): Observable<any> {
    return of(LIST);
  }


  getDefaultImage(): string{
    return 'https://s3.amazonaws.com/37assets/svn/765-default-avatar.png'
  }
}
