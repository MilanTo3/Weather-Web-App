import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string){

    let query = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=1fdf3f375937876dbf439aa7bb6bc8e7`

    return this.http.get(query);
  }

}
