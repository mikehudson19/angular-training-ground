import { Component, OnInit, ViewChild } from '@angular/core';
import { MyCounterComponent } from '../my-counter/my-counter.component';

@Component({
  selector: 'app-my-counter-parent',
  templateUrl: './my-counter-parent.component.html',
  styleUrls: ['./my-counter-parent.component.css']
})
export class MyCounterParentComponent implements OnInit {

  @ViewChild(MyCounterComponent) counterReference = {} as MyCounterComponent;

  @ViewChild('myTemplateRef') myTemplateRef = {};
  @ViewChild('componentTemplateRef') componentTemplateRef = {};

  constructor() { }

  ngOnInit(): void {
    console.log('init - myTemplateRef',this.myTemplateRef);
    console.log('init - componentTemplateRef',this.componentTemplateRef);
    // console.log('init - myTemplateRef',this.myTemplateRef);
  }

  ngAfterViewInit() {
    console.log('after view init - myTemplateRef',this.myTemplateRef);
    console.log('after view init - componentTemplateRef',this.componentTemplateRef);
  }

  increaseCounter(x: number) {
    // Here the @ViewChild property is allowing us to access the methods in the child component, through the parent component.
    this.counterReference.increaseCounter(12);
  }

  decreaseCounter(x: number) {
    // Here the @ViewChild property is allowing us to access the methods in the child component, through the parent component.
    this.counterReference.decreaseCounter(11);
  }

}
