import { Component, OnInit } from '@angular/core';
import { WeatherData, Wind } from './models/weather.model';
import { WeatherServiceService } from './services/weather-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'WeatherApp';
  temp = 0;
  weatherData!: WeatherData;
  cityName = "Zagreb";

  constructor(private weatherServ: WeatherServiceService){

  }

  ngOnInit(): void {
    this.weatherServ.getWeatherData('Zagreb').subscribe({
      next: (res) => {
        console.log(res);
        this.weatherData = res;
        
      }

    });
  }

  changelocation(){

    
    this.weatherServ.getWeatherData(this.cityName).subscribe({
      next: (res) => {
        console.log(res);
        this.weatherData = res;
        
      }

    });

  }

}
