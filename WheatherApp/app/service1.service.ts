import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor(private http:HttpClient) { }
  getwheather(city:string,unit:string){
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=77d7d0879cd026987af974e2291b7b0e&units='+unit);
  }
}
