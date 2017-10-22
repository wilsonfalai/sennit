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
  movie(): Observable<any> {
      return this.http.get('https://community-netflix-roulette.p.mashape.com/api.php?title=The+Boondocks')
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }

}
