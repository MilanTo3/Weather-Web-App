import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { WeatherData } from 'src/app/models/weather.model';
import { WeatherServiceService } from 'src/app/services/weather-service.service';

@Component({
  selector: 'app-weather-comp',
  templateUrl: './weather-comp.component.html',
  styleUrls: ['./weather-comp.component.css']
})
export class WeatherCompComponent implements OnInit {

  title = 'WeatherApp';
  temp = 0;
  weatherData!: WeatherData;
  cityName = "Zagreb";

  constructor(private weatherServ: WeatherServiceService, private toastrServ: ToastrService){

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
        
      },
      error: (err) => {
        this.toastrServ.error("No such city!");
      }

    });

  }

}
