import { Component, OnInit } from '@angular/core';

//import { HttpClient } from '@angular/common/http';
import {NetflixrouletteService} from './netflixrouletter.service'
import {Movie} from './movie.model';





@Component({
  selector: 'app-netflixroulette',
  templateUrl: './netflixroulette.component.html',
  styleUrls: ['./netflixroulette.component.css']
})
export class NetflixrouletteComponent implements OnInit {

  result: Movie;

  // Inject HttpClient into your component or service.
 //constructor(private http: HttpClient) {}
 constructor(private netflixrouletteService: NetflixrouletteService) { }

 ngOnInit(): void {
     /*this.netflixrouletteService.movie()
      .subscribe(result => this.result = result)*/
  };

  onClickMe() {
    this.netflixrouletteService.movie()
     .subscribe(result => this.result = result)

  }




}
