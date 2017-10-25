import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NetflixrouletteComponent } from './netflixroulette/netflixroulette.component';
import { NetflixrouletteService} from './netflixroulette/netflixrouletter.service';

import { RouterModule } from '@angular/router';
import {ROUTES} from './app.routes';
import { HomeComponent } from './home/home.component'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NetflixrouletteComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, // after BrowserModule.
    RouterModule.forRoot(ROUTES)
  ],
  providers: [NetflixrouletteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
