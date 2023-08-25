import { FormGroup, Validators, FormControl} from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _Router:Router,private _AuthService:AuthService){}
  error=""
  loginForm = new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required, Validators.pattern("")]),
    // "/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/"
  })
  submitLoginForm(loginForm:FormGroup){
    this._Router.navigate(['/home'])
    // this._AuthService.login(loginForm.value).subscribe((res)=>{
    //   if(res.message=="success"){
    //     localStorage.setItem('userToken',res.token)
    //     this._AuthService.saveCurrentUser()
    //     this._Router.navigate(['/home'])
    //   }
    //   else{
    //     this.error = res.message
    //   }
    // })
    
  }
}
