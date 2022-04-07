import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InputOutputModule } from './modules/input-output/input-output.module';
import { SubjectModule } from './modules/subject/subject.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    InputOutputModule,
    SubjectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
