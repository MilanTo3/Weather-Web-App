import { Component } from '@angular/core';
import { WeatherServiceService } from './services/weather-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WeatherApp';
  temp = 0;

  constructor(private weatherServ: WeatherServiceService){
    let k = weatherServ.getWeatherData("belgrade");
    console.log(k);
  }

}
