import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  childInput!: FormControl;
  @Output() dataToSend: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.childInput = new FormControl();
  }

  sendToParent(): void {
    const data = this.childInput.value;
    this.dataToSend.emit(data);
  }

}
