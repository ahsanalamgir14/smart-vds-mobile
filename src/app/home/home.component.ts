import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Router } from '@angular/router';
import Swiper from 'swiper';

register();

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  showPage: boolean = true;
  // @ViewChild('swiper', { static: false }) swiper: any;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('home loaded');
    this.showPage = true;
    // console.log('indexx', this.swiperRef?.nativeElement.swiper.getActiveIndex());
    // const swiper = new Swiper('.swiper-container', {
    //   navigation: {
    //     nextEl: '.next-button',
    //     prevEl: '.skip-button',
    //   },
    // });
  }

  
  swiperChange(event: any) {
    console.log('event: ', event);
  }

  next() {
    console.log(this.swiperRef?.nativeElement.swiper.activeIndex);
    console.log(this.swiperRef?.nativeElement.swiper.previousIndex);
    // this.swiper.slideNext();
  }

  
  prev() {
    // this.swiper.slidePrev();
    console.log(this.swiperRef?.nativeElement.swiper.nextIndex);

  }

  gotToOverview() {
    this.showPage = false;
    // this.router.navigate(['overview'])
    this.router.navigateByUrl('/overview');

  }

}
