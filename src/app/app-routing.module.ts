import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { MainAppComponent } from './Components/main-app/main-app.component';

const routes: Routes = [

  {
    path: '', component: HomeComponent
  },
  {
    path: 'app', component: MainAppComponent
  },
  {
    path: 'Home', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
