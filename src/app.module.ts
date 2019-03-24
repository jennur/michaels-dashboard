import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app/app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { routing } from './app.routes';
import { IpDataComponentComponent } from './components/ip-data-component/ip-data-component.component';
import { AdviceComponentComponent } from './components/advice-component/advice-component.component';
import { CityComponentComponent } from './components/city-component/city-component.component';
import { JokeComponentComponent } from './components/joke-component/joke-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    LoginPageComponent,
    IpDataComponentComponent,
    AdviceComponentComponent,
    CityComponentComponent,
    JokeComponentComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
