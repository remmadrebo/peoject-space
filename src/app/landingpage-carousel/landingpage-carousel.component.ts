import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-landingpage-carousel',
  templateUrl: './landingpage-carousel.component.html',
  styleUrls: ['./landingpage-carousel.component.css']
})
export class LandingpageCarouselComponent implements OnInit {
  images = [1, 2, 3].map(() => `https://picsum.photos/1920/1080?random&t=${Math.random()}`);

  constructor() { }

  ngOnInit() {
  }

}