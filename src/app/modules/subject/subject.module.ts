import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SenderComponent } from './sender/sender.component';
import { ReceiverComponent } from './receiver/receiver.component';
import { UserService } from './user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ContainerComponent } from './container/container.component';



@NgModule({
  declarations: [
    SenderComponent,
    ReceiverComponent,
    ContainerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SubjectModule { }
