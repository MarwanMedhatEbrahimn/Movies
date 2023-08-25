import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss']
})
export class HomeSliderComponent {
  @Input() trendingMovies:any[] = [];
  prefixImage = "https://image.tmdb.org/t/p/w500"
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    margin:8,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      660: {
        items: 5
      },
      940: {
        items: 8
      }
    },
    nav: true
  }
}
