import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {

  senderControl!: FormControl;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.senderControl = new FormControl();
  }

  sendData(): void {
    const data = this.senderControl.value;
    this.userService.updateUsers(data);
  }

}
