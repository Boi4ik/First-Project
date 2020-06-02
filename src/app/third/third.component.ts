import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})

export class ThirdComponent implements OnInit {
  public slidesName = [
  ];
  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true
},

  watchSlidesProgress: true,
  // watchSlidesVisibility: true,
  initialSlide: 1,
  effect: 'coverflow',
  spaceBetween: 0,
  coverflowEffect: {
  slideShadows: false,
  rotate: 0,
  // stretch: 10
  modifier: 25
  }
    };
  constructor() { }


  ngOnInit() {
  }

}
