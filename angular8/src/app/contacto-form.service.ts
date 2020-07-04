import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ContactoFormService {

  API_KEY = 'YOUR_API_KEY';

  constructor(private httpClient: HttpClient, private alert: MatSnackBar, private router: Router) { }


  public getNews() {
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);
  }

  public logIn(nombre, msj, email, asunto) {
    let headers =
    {
      'postman-token': 'b15dec5b-b539-7a7f-218a-a1cb79fc1d69',
      'cache-control': 'no-cache',
      'content-type': 'application/x-www-form-urlencoded'
    };
    let body ="email=" + email + "&message=" +msj +
        "&asunto=" + asunto + "&nombre=" + nombre;

    return this.httpClient.post<any>('https://us-central1-laforjaweb2.cloudfunctions.net/submit',
      body, { headers });

  }




}