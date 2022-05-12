import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { MyCounterParentComponent } from './my-counter-parent/my-counter-parent.component';



@NgModule({
  declarations: [
    MyCounterComponent,
    MyCounterParentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ViewChildModule { }
