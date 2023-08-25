import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-seasondetails',
  templateUrl: './seasondetails.component.html',
  styleUrls: ['./seasondetails.component.scss']
})
export class SeasondetailsComponent {
  id:String = ''
  Snum:String = ''
  name:String = ''
  seasonDetails:any = {}
  prefixImage:String = "https://image.tmdb.org/t/p/w500"
  constructor(private _ActivatedRoute:ActivatedRoute,private _MoviesService:MoviesService){
    this.id = _ActivatedRoute.snapshot.params.id;
    this.Snum = _ActivatedRoute.snapshot.params.Snum;
    this.name = _ActivatedRoute.snapshot.params.name;
    
    _MoviesService.getSeasonDetails(this.id,this.Snum).subscribe((data)=>{
      this.seasonDetails=data
    })

  }
}
