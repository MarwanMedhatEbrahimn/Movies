import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs'
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient,private _Router:Router) {
    if(localStorage.getItem("userToken")!=null){
      this.saveCurrentUser();
    }
  }

  currentUser=new BehaviorSubject(null);

  saveCurrentUser(){
    let token:any = localStorage.getItem("userToken");
    this.currentUser.next(jwtDecode(token))

  }

  register(formData:any):Observable<any>{
    return this._HttpClient.post('url',formData);
  }

  login(formData:any):Observable<any>{
    return this._HttpClient.post('url',formData);
  }

  logout(){
    this.currentUser.next(null)
    localStorage.removeItem('userToken')
    this._Router.navigate(['/login'])
  }

}
