import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})

export class AuthService {

  logged = false;

  constructor(){ }

  isLogged(): boolean {
    return true;
  }




}
