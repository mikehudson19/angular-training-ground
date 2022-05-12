import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifecycleParentComponent } from './lifecycle-parent/lifecycle-parent.component';
import { LifecycleChildComponent } from './lifecycle-child/lifecycle-child.component';



@NgModule({
  declarations: [
    LifecycleParentComponent,
    LifecycleChildComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LifecycleChildComponent,
    LifecycleParentComponent
  ]
})
export class LifecycleHooksModule { }
