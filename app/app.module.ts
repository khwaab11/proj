import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import {IvyCarouselModule} from 'angular-responsive-carousel' 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NextDirective } from './next.directive';
import { PrevDirective } from './prev.directive';
import { UsersDetailsComponent } from './components/users-details/users-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { CarouselViewComponent } from './components/carousel-view/carousel-view.component';
import { FilterComponent } from './components/filter/filter.component';
import { HeadersComponent } from './components/headers/headers.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NextDirective,
    PrevDirective,
    UsersDetailsComponent,
    CarouselViewComponent,
    FilterComponent,
    HeadersComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule
   // IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
