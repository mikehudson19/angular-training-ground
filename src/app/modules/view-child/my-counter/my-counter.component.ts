import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent implements OnInit {

  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  increaseCounter(x: number) {
    this.counter += x;
  }

  decreaseCounter(x: number) {
    this.counter -= x;
  }

}
