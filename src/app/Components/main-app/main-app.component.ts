import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.scss']
})
export class MainAppComponent implements OnInit {

  location = {
    city: 'Delhi'
  };
   WeatherData: any;
  value: any;
  scrollingElement = (document.scrollingElement || document.body);
  constructor(private weatherService: WeatherService,
              private router: Router) { }

  ngOnInit()
  {

    this.value = localStorage.getItem('location');
    if (this.value != null)
    {
      this.location = JSON.parse(this.value);
    }
    else
    {
      this.location = {
        city: 'Delhi'
      }
    }

    this.weatherService.fetchWeatherData(this.location.city).subscribe(
      response => {
        console.log(response);
        this.setWeatherData(response);
      },
      err => {
        console.log('HTTP Error', err)
        alert("OOPS! THIS CITY'S WEATHER IS CURRENTLY NOT ACCESSIBLE");
         this.router.navigate(['Home']);
      }
    )

    this.scrollToBottom();
  }

  setWeatherData(data){
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    var dd = String(currentDate.getDate()).padStart(2, '0');
    var mm = String(currentDate.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = currentDate.getFullYear();
    let date = dd + '/' + mm + '/' + yyyy;
    this.WeatherData.Date = date;
    this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
    this.WeatherData.windSpeed=(this.WeatherData.wind.speed);

  }

  scrollToBottom() 
  {
   this.scrollingElement.scrollTop = this.scrollingElement.scrollHeight;
  }


}
