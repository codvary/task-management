import { Component, input, output } from '@angular/core';
import { type User } from '../../template/users.template';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  selected = output<User>();
  usr = input.required<User>();
  isSelected = input.required<boolean>();

  onSelectedUser(){
    this.selected.emit(this.usr());
  }
}
