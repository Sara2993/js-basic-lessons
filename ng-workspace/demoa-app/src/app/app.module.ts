import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {AppHeaderComponent} from './app.header.component';
import { BoxaComponent } from './boxa/boxa.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CountDisplayComponentComponent } from './count-display-component/count-display-component.component';
import { HitButtonComponent } from './hit-button/hit-button.component';
//import { DisplayComponent } from './display/display.component';
import { CounterAppComponent } from './counter-app/counter-app.component';
 import { RtPcrComponent } from './rt-pcr/rt-pcr.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppHeaderComponent,
    BoxaComponent,
     CustomerFormComponent,
    CountDisplayComponentComponent,
    HitButtonComponent,
     //DisplayComponent,
     CounterAppComponent,
    RtPcrComponent
  ],//components,dirextives,pipes
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],//import other dependent modules i.e other modules used
  //in the current module
  providers: [],//provide service to app root injector
  bootstrap: [AppComponent,AppHeaderComponent,HomeComponent]
})
export class AppModule { }
