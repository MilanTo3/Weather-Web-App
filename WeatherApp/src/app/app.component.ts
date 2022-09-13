import { Component, OnInit } from '@angular/core';
import { WeatherData, Wind } from './models/weather.model';
import { WeatherServiceService } from './services/weather-service.service';
import { ToastrService } from 'ngx-toastr';
import { fader, slider } from './route-animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slider]
})
export class AppComponent {

  constructor(){

  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  

}
