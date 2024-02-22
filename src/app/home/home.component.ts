import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Router } from '@angular/router';

register();

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('home loaded');
  }

  
  swiperChange(event: any) {
    console.log('event: ', event);
  }

  next() {
    console.log('event: ', event);
  }

  
  prev() {
    console.log('event: ', event);
  }

  gotToOverview() {
    // this.router.navigate(['overview'])
    this.router.navigateByUrl('/overview');

  }

}
