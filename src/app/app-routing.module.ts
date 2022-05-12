import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './modules/input-output/parent/parent.component';
import { LifecycleParentComponent } from './modules/lifecycle-hooks/lifecycle-parent/lifecycle-parent.component';
import { ContainerComponent } from './modules/subject/container/container.component';
import { MyCounterParentComponent } from './modules/view-child/my-counter-parent/my-counter-parent.component';

const routes: Routes = [
  { path: 'io-parent', component: ParentComponent },
  { path: 'subject', component: ContainerComponent },
  { path: 'lifecycles', component: LifecycleParentComponent },
  { path: 'view-child', component: MyCounterParentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
