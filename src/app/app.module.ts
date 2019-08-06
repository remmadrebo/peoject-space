import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LandingpageCarouselComponent } from './landingpage-carousel/landingpage-carousel.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  imports:[
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule, 
    FormsModule, 
    NgbModule],
  declarations: [ AppComponent, HelloComponent, LandingpageCarouselComponent, TopBarComponent ],
  bootstrap:    [ AppComponent, LandingpageCarouselComponent ]
})
export class AppModule { }
