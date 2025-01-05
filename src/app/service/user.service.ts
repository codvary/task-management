import { Injectable } from '@angular/core';
import { USERS } from '../model/users.model';
import { User } from '../template/users.template';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users:User[] = USERS;
  constructor() { }

  listUsers():User[]{
    return this.users;
  }
}
