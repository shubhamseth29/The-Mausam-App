import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainAppComponent } from './Components/main-app/main-app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './Components/home/home.component';
import { WeatherService } from './weather.service';

@NgModule({
  declarations: [
    AppComponent,
    MainAppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
