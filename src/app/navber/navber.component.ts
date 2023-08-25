import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-navber',
  templateUrl: './navber.component.html',
  styleUrls: ['./navber.component.scss']
})
export class NavberComponent {
  search:string=(this._ActivatedRoute.snapshot.params.search)?this._ActivatedRoute.snapshot.params.search:'';
  onkeySearch(value:any){
    this.search = value.value
  }
  onSearch(){
    if(this._Router.url.split('/')[1]=="tv"){
      this._Router.navigate(['/tv/page/',1,'search',this.search])
    }
    else{
      this._Router.navigate(['/movies/page/',1,'search',this.search])
    }
  }
  currentpage = "Home"
  isLogin:boolean=true;
  constructor(private _AuthService:AuthService,private _Router:Router,private _ActivatedRoute:ActivatedRoute){
    // _AuthService.currentUser.subscribe(()=>{
    //   if(_AuthService.currentUser.getValue()!=null){
    //     this.isLogin=true;
    //   }
    //   else{
    //     this.isLogin=false;
    //   }
    // })
  }
  clickLogout(){
    this._AuthService.logout();
  }
  ngOnInit(){
    this._Router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        this.currentpage = this._Router.url.split('/')[1]
        console.log(this.currentpage)
      }
    })
  }
}
