import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  dataFromChild: string = '';

  constructor() { }

  ngOnInit(): void {

  }

  receiveData(data: string): void {
    this.dataFromChild = data;
  }

}
