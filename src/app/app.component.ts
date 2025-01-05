import { Component } from '@angular/core';
import { HeaderComponent } from './component/header/header.component';
import { UsersComponent } from "./component/users/users.component";
import { USERS } from './model/users.model';
import { TasksComponent } from "./component/tasks/tasks.component";
import { type User } from './template/users.template';
import { TASKS } from './model/tasks.model';
import { FooterComponent } from "./component/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UsersComponent, TasksComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'codvary-blog';
  selected?:User; 
  usrs = USERS;
  tsks = TASKS;

  handleOnSelectedUser(user: User){
    this.selected = user;
  }

  get selectedUser(){
    return this.selected!;
  }
}
