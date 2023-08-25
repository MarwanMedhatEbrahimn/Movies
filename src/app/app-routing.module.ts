import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { authGuard } from './auth.guard';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { TvdetailsComponent } from './tvdetails/tvdetails.component';
import { SeasondetailsComponent } from './seasondetails/seasondetails.component';

const routes: Routes = [
  {path:'',redirectTo:"home",pathMatch:"full"},
  {path:'home',canActivate:[authGuard],component:HomeComponent},
  {path:'movie/:id',canActivate:[authGuard],component:MoviedetailsComponent},
  {path:'tv/:id',canActivate:[authGuard],component:TvdetailsComponent},
  {path:'tv/:id/:name/:Snum',canActivate:[authGuard],component:SeasondetailsComponent},
  {path:'movies',canActivate:[authGuard],component:MoviesComponent},
  {path:'movies/page/:Pnum',canActivate:[authGuard],component:MoviesComponent},
  {path:'movies/page/:Pnum/search/:search',canActivate:[authGuard],component:MoviesComponent},
  {path:'movies/page/:Pnum/search',redirectTo:"movies/page/:Pnum",pathMatch:"full"},
  {path:'movies/page',redirectTo:"movies",pathMatch:"full"},
  {path:'tv',canActivate:[authGuard],component:TvComponent},
  {path:'tv/page/:Pnum',canActivate:[authGuard],component:TvComponent},
  {path:'tv/page/:Pnum/search/:search',canActivate:[authGuard],component:TvComponent},
  {path:'tv/page/:Pnum/search',redirectTo:"tv/page/:Pnum",pathMatch:"full"},
  {path:'tv/page',redirectTo:"tv",pathMatch:"full"},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'**',component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
