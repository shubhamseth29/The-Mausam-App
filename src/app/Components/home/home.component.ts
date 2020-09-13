import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import cityList from 'src/app/Components/home/_jsonFile/cities.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // city: string;
  cityInfo: {id: string , name: string , state: string}[] = cityList;
  constructor(private router: Router) { }

  ngOnInit(): void {
    }

    fetchWeatherData(cityName)
  {
    console.log(cityName);
    let location =
    {
      city: cityName
    }
    localStorage.setItem('location', JSON.stringify(location));
    this.router.navigate(['app']);
  }
}
