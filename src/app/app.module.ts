import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
//import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

//Assignment 1
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';

// Assignment 2
import { Assignmen2Component } from './assignment2/assignment2.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    Assignmen2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
//    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
