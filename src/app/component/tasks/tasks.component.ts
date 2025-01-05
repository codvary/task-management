import { Component, input, output } from '@angular/core';
import { type Tasks } from '../../template/tasks.template';
import { type User } from '../../template/users.template';
import { TaskComponent } from './task/task.component';
import { TASKS } from '../../model/tasks.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from '../../template/new-task.template';


@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  selected = input.required<User>();
  tsks: Tasks[] = TASKS;
  isAddingTask: boolean = false;


  get selectedUserTask(): Tasks[] {
    return this.tsks.filter((tsk) => tsk.uid === this.selected().uid)!;
  }

  handleOnTaskCompleted(task: Tasks) {
    this.tsks = this.tsks.filter((tsk) => tsk.tid !== task.tid);
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

  openAddTask(){
    this.isAddingTask = true;
  }

  onAddNewTask(newTask: NewTask){
    this.tsks.push({
      uid:this.selected().uid,
      tid: new Date().getTime().toString(),
      title:newTask.title,
      task:newTask.summary,
      date:newTask.date
    });
  }
}
