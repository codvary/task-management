import { Component } from '@angular/core';
import { type User } from './template/users.template';
import { TASKS } from './model/tasks.model';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'codvary-blog';
  selected?:User; 
  users?: User[];
  tsks = TASKS;

  constructor(private userSerivce: UserService){
    this.users = userSerivce.listUsers();
  }

  handleOnSelectedUser(user: User){
    this.selected = user;
  }

  get selectedUser(){
    return this.selected!;
  }
}
