import { Injectable } from '@angular/core';
import { TASKS } from '../model/tasks.model';
import { Tasks } from '../template/tasks.template';
import { NewTask } from '../template/new-task.template';
import { User } from '../template/users.template';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks:Tasks[] = TASKS;

  constructor() { }

  listTasks():Tasks[]{
    return this.tasks;
  }

  getSelectedTask(uid:string):Tasks[]{
    return this.tasks.filter((task) => task.uid === uid)!;
  }

  removeSelectedTask(tid:string){
    this.tasks = this.tasks.filter((task) => task.tid !== tid);
  }

  addNewTask(newTask:NewTask, user:User ){
    this.tasks.push({
      uid: user.uid,
      tid: new Date().getTime().toString(),
      title:newTask.title,
      task:newTask.summary,
      date:newTask.date
    });
  }
}
