import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LifecycleChildComponent } from '../lifecycle-child/lifecycle-child.component';

@Component({
  selector: 'app-lifecycle-parent',
  templateUrl: './lifecycle-parent.component.html',
  styleUrls: ['./lifecycle-parent.component.css']
})
export class LifecycleParentComponent implements OnInit {

  userName = 'John';

  @ViewChild('myHeading') myViewHeading!: ElementRef;
  @ViewChild(LifecycleChildComponent) myChildComponent!: LifecycleChildComponent;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    console.log("viewChild",this.myChildComponent);
  }
  
  updateUser() {
    this.userName = 'Bob';
  }
}
