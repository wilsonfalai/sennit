import {Routes} from '@angular/router'

import {NetflixrouletteComponent} from './netflixroulette/netflixroulette.component'

import {HomeComponent} from './home/home.component'


export const ROUTES: Routes  = [
  {path: '', component: HomeComponent},
  {path: 'movie', component: NetflixrouletteComponent}

]
