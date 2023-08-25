import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }
  getTrending(madiaType:String):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${madiaType}/day?language=en-US&api_key=d1137969de49ad649e9c9d193481728c`);
  }
  getMovieDetails(movie_id:String):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${movie_id}?language=en-US&api_key=d1137969de49ad649e9c9d193481728c`)
  }
  getTvDetails(tv_id:String):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${tv_id}?language=en-US&api_key=d1137969de49ad649e9c9d193481728c`)
  }
  getSeasonDetails(tv_id:String,season_number:String):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${tv_id}/season/${season_number}?language=en-US&api_key=d1137969de49ad649e9c9d193481728c`)
  }
  getDiscover(madiaType:String,pagenum:Number,Search:String):Observable<any>{
    if(Search)
      return this._HttpClient.get(`https://api.themoviedb.org/3/search/${madiaType}?api_key=d1137969de49ad649e9c9d193481728c&query=${Search}&page=${pagenum}`); 
    else
      return this._HttpClient.get(`https://api.themoviedb.org/3/discover/${madiaType}?api_key=d1137969de49ad649e9c9d193481728c&page=${pagenum}&include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc`); 
  }
}
