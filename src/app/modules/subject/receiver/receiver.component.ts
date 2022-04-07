import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent implements OnInit {

  users: any[] = [];
  
  data: string = '';

  constructor(private userService: UserService) {

    this.userService.users$.subscribe(data => {
      this.data = data;
    })
   }

  ngOnInit(): void {
    // this.userService.updateUsers();
  }

}
