import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

const users = [
  {
    id: 1,
    name: "John Doe",
    username: "johndoe",
  },
  {
    id: 2,
    name: "Jane Doe",
    username: "janedoe",
  },
  {
    id: 3,
    name: "Janet Doe",
    username: "janetdoe",
  },
]

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users$ = new Subject<any>();
  // users$ = new BehaviorSubject<any>(null);
  // users$ = new ReplaySubject<any>(null);

  constructor() {
    this.users$.next(users);
    this.users$.next('new piece of data');
   }

   updateUsers(data: any): void {
     this.users$.next(data);
   }
}
