import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  Movies:any = []
  pageNumber:number = 1;
  totalPage:number = 0;
  btns_pages:number[]=[];
  btns_end:number=0;
  search:String=''
  prefixImage = "https://image.tmdb.org/t/p/w500"
  constructor(private _ActivatedRoute:ActivatedRoute,private _MoviesService:MoviesService,private _Router:Router){
    if(_ActivatedRoute.snapshot.params.Pnum){
      this.pageNumber = Number.parseInt(_ActivatedRoute.snapshot.params.Pnum)
    }
    if(_ActivatedRoute.snapshot.params.search){
      this.search=_ActivatedRoute.snapshot.params.search
    }
    _MoviesService.getDiscover('movie',this.pageNumber,this.search).subscribe((data)=>{
      this.Movies = data.results;
      this.totalPage = data.total_pages;
      this.setbtns_pages();
    })
  }
  setbtns_pages(){
    this.btns_pages=[];
    for(let i=this.pageNumber-2;i<this.pageNumber;i++){
      if(i<=0){continue}
      this.btns_pages.push(i);
    }
    this.btns_end=(this.totalPage<=100)?this.totalPage:100;
    for(let i:number=this.pageNumber;i<=this.pageNumber+2&&i<this.btns_end;i++){
      this.btns_pages.push(i);
    }
  }
  changeNumberPage(value:any){
    if(this._ActivatedRoute.snapshot.params.search){
      this._Router.navigate(['/movies/page/',value,'search',this.search])
    }
    else{
      this._Router.navigate(['/movies/page/',value])
    }
  }
  gotopage(value:any){
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if(this._ActivatedRoute.snapshot.params.search){
      this.search=this._ActivatedRoute.snapshot.params.search
    }
    if(this._ActivatedRoute.snapshot.params.search==''){
      this.search='';
    }
    this.pageNumber = value
    this._MoviesService.getDiscover('movie',this.pageNumber,this.search).subscribe((data)=>{
      this.Movies = data.results;
      this.totalPage = data.total_pages;
      this.setbtns_pages();
    })
  }
  ngOnInit() {
    this._Router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        if(this._ActivatedRoute.snapshot.params.Pnum){
          this.pageNumber = Number.parseInt(this._ActivatedRoute.snapshot.params.Pnum)
        }
        this.gotopage(this.pageNumber)
      }
    })
  }
}
