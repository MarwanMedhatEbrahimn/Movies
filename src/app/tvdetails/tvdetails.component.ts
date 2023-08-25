import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-tvdetails',
  templateUrl: './tvdetails.component.html',
  styleUrls: ['./tvdetails.component.scss']
})
export class TvdetailsComponent {
  id:String = ''
  tvDetails:any = {}
  prefixImage:String = "https://image.tmdb.org/t/p/w500"
  constructor(private _ActivatedRoute:ActivatedRoute,private _MoviesService:MoviesService){
    this.id = _ActivatedRoute.snapshot.params.id;
    _MoviesService.getTvDetails(this.id).subscribe((data)=>{
      this.tvDetails=data
    })
  }

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    margin:8,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      660: {
        items: 2
      },
      940: {
        items: 2
      }
    },
    nav: true
  }
}
