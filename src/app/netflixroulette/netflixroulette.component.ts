import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

interface ItemsResponse {
  result: string;
}




@Component({
  selector: 'app-netflixroulette',
  templateUrl: './netflixroulette.component.html',
  styleUrls: ['./netflixroulette.component.css']
})
export class NetflixrouletteComponent implements OnInit {

  result: string;

  // Inject HttpClient into your component or service.
 constructor(private http: HttpClient) {}

 ngOnInit(): void {
   // Make the HTTP request:
   this.http.get<ItemsResponse>('http://localhost:3000/movies',{observe: 'response'})
   .subscribe(resp => {
    // Here, resp is of type HttpResponse<MyJsonData>.
    // You can inspect its headers:
    console.log(resp.headers.get('X-Custom-Header'));
    // And access the body directly, which is typed as MyJsonData as requested.
    console.log(resp.body);
  });

 }

}
