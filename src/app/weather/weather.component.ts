import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  weather: any;
  //  lat = 39.742043;
  //  long = -104.991531;
  lat :any;
  long :any;
  celsius:any;
  fahrenheit:any;
  Kelvin: any;
  prompt:any;
  description: any;
  urlData:any;
  imageurl: any;
  constructor(private weatherService: WeatherService) {}
  onResultsButtonClick(): void {
    this.ngOnInit();
  }
  
  ngOnInit(): void {
    this.WeatherData();
  }

  WeatherData(): void {
    this.weatherService.getWeather(this.lat, this.long).subscribe((data) => {
      this.weather = data;
      this.Kelvin=this.weather.main.temp;
       this.celsius = this.Kelvin - 273.15;
       this.fahrenheit= (this.Kelvin * (9/5)) - 459.67;
      this.prompt=this.weather.name + "Famous Place in 4k HD resolution with" + this.weather.weather[0].description;
       //  this.prompt=this.weather.weather[0].description + " in cartoon way along with a marvel super hero in 4k";
      console.log("Real time data",data);
      this.ImageResponseData();
    });
  }
  ImageResponseData():void{
    this.weatherService.generateImage(this.prompt).subscribe((data)=>{
      this.urlData=data;
      this.imageurl=this.urlData.data[0].url;
    })
  }
}
