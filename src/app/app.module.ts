import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InputOutputModule } from './modules/input-output/input-output.module';
import { LifecycleHooksModule } from './modules/lifecycle-hooks/lifecycle-hooks.module';
import { SubjectModule } from './modules/subject/subject.module';
import { ViewChildModule } from './modules/view-child/view-child.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    InputOutputModule,
    SubjectModule,
    LifecycleHooksModule,
    ViewChildModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
