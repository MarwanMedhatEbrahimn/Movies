import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { MoviesService } from '../movies.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  trendingMovies:any = []
  trendingTv:any = []
  trendingPersons:any = []
  prefixImage = "https://image.tmdb.org/t/p/w500"
  constructor(private _MoviesService:MoviesService){
    _MoviesService.getTrending('movie').subscribe((data)=>{
      this.trendingMovies = data.results.slice(0,10);
    })
    _MoviesService.getTrending('tv').subscribe((data)=>{
      this.trendingTv = data.results.slice(0,10);
    })
    _MoviesService.getTrending('person').subscribe((data)=>{
      this.trendingPersons = data.results.slice(0,10);
    })
  }

}
