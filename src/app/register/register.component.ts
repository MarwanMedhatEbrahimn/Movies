import { Component } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private _AuthService:AuthService,private _Router:Router){

  }
  error:string = ""
  registerForm = new FormGroup({
    first_name:new FormControl(null,[Validators.pattern("[a-zA-z]{3,15}"),Validators.required]),
    last_name:new FormControl(null,[Validators.pattern("[a-zA-z]{3,15}"),Validators.required]),
    age:new FormControl(null,[Validators.required,Validators.min(10),Validators.max(90)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required, Validators.pattern("")]),
    // "/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/"
  })
  submitRegisterForm(registerForm:FormGroup){
    this._Router.navigate(['/login'])
    // this._AuthService.register(registerForm.value).subscribe((res)=>{
    //   if(res.message=="success"){
    //     this._Router.navigate(['/login'])
    //   }
    //   else{
    //     this.error = res.errors.email.message
    //   }
    // })
  }

}
