import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: any = null;

  constructor() { }

  register(username:string , password:string){
    localStorage.setItem('user',JSON.stringify({username,password}));
    this.currentUser={username,password};
  }

  login(username:string , password:string): boolean {
    const storeduser = JSON.parse(localStorage.getItem('user') ||'{}');
    if( storeduser.username === username && storeduser.password === password){
      this.currentUser = storeduser;
      return true;
    }
    return false
  }

  getCurrentUser(){
    return this.currentUser;
  }

  logOut(){
    this.currentUser=null;
    localStorage.removeItem('user');
  }
}
