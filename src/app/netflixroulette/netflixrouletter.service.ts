import { Injectable } from '@angular/core';
import {Http} from '@angular/http'//Serviço http

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import {ErrorHandler} from '../app.error-handler'

@Injectable()
export class NetflixrouletteService {


  constructor(private http: Http) { }

  //GET /restaurants
  //https://api.reelgood.com/roulette/netflix?nocache=true&sources=netflix
  movie(): Observable<any> {
      return this.http.get('http://localhost:3000/movies')
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }

}
