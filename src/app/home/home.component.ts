import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  
  swiperChange(event: any) {
    console.log('event: ', event);
  }

  
  next() {
    console.log('event: ', event);
  }

  
  prev() {
    console.log('event: ', event);
  }

}
