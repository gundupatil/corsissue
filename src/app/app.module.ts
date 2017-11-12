import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AuthService} from './auth/auth.service';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { CONST_ROUTING } from './app.routing';

import { DashboardComponent } from './components/dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    RegisterComponent,
  
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CONST_ROUTING
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
