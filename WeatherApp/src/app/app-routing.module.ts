import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherCompComponent } from './component/weather-comp/weather-comp.component';
import { MapCompComponent } from './component/map-comp/map-comp.component';

const routes: Routes = [

  { path: "", redirectTo: "weather", pathMatch: "full" },
  { path: "weather", component: WeatherCompComponent, data: { animation: 'isLeft' } },
  { path: "map", component: MapCompComponent, data: { animation: 'isRight' } }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
