import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InputOutputModule } from './input-output/input-output.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, InputOutputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
