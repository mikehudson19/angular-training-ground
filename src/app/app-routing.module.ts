import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './modules/input-output/parent/parent.component';
import { ContainerComponent } from './modules/subject/container/container.component';

const routes: Routes = [
  { path: 'io-parent', component: ParentComponent },
  { path: 'subject', component: ContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
