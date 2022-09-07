import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string) : Observable<WeatherData> {

    let query = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=1fdf3f375937876dbf439aa7bb6bc8e7&units=metric`

    return this.http.get<WeatherData>(query);
  }

}
