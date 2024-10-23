import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RegisterserviceService {

  private isLoggedIn = false; 

  constructor() {}

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }

  checkLogin(): boolean {
    return this.isLoggedIn;
  }
}
