import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Router } from '@angular/router';

register();

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;

  constructor(private router: Router) { }

  ngOnInit() { }

  swiperChange(event: any) {
    console.log('event: ', event);
  }

  next() {
    const swiper = this.swiperRef?.nativeElement.swiper;
    swiper.slideNext();
  }

  prev() {
    const swiper = this.swiperRef?.nativeElement.swiper;
    swiper.slidePrev();
  }

  gotToOverview() {
    this.router.navigateByUrl('/overview');

  }

}
