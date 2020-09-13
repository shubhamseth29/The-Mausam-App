import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  WeatherData;
  constructor(private http: HttpClient) { }


  fetchWeatherData(location)
  {
    // fetch('https://community-open-weather-map.p.rapidapi.com/weather?q=' + location + ',in',
    // {
    //   method: 'GET',
    //   headers:
    //   {
    //     'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
    //     'x-rapidapi-key': ' d933ca6025msh2813d394dacea28p129abajsn6d3513dbf5d2'
    //   }
    // })
    // .then(response => response.json())
    // .then(data => this.setWeatherData(data));
    //   return this.WeatherData;

    let httpHeaders = new HttpHeaders({
      'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
      // 'x-rapidapi-key': 'd933ca6025msh2813d394dacea28p129abajsn6d3513dbf5d2'
      'x-rapidapi-key': '254c25f8b8mshfee53928e7e4d5ep133dfbjsn1b587a6bd99b'
    });
      return this.http.get('https://community-open-weather-map.p.rapidapi.com/weather?q=' + location + ',in', {headers: httpHeaders});

  }

}

