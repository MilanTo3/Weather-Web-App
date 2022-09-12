import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { WeatherData } from 'src/app/models/weather.model';
import { WeatherServiceService } from 'src/app/services/weather-service.service';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import { OSM } from 'ol/source';
import TileLayer from 'ol/layer/Tile';

@Component({
  selector: 'app-map-comp',
  templateUrl: './map-comp.component.html',
  styleUrls: ['./map-comp.component.css']
})
export class MapCompComponent implements OnInit {

  title = 'WeatherApp';
  temp = 0;
  weatherData!: WeatherData;
  cityName = "Zagreb";
  public map!: Map

  constructor(private weatherServ: WeatherServiceService, private toastrServ: ToastrService){

  }

  ngOnInit(): void {
    this.weatherServ.getWeatherData('Zagreb').subscribe({
      next: (res) => {
        console.log(res);
        this.weatherData = res;
        
      }

    });

    this.map = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: 'map',
      view: new View({ 
        center: [0, 0],
        zoom: 2, maxZoom: 18, 
      }),
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
