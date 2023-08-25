import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
export const authGuard: CanActivateFn = (route, state) => {
  let token = localStorage.getItem("userToken") 
  const _Router = inject(Router);
  if(token!=null){
    return true;
  }
  else{
    // _Router.navigate(['/login'])
    return true;
  }
};
