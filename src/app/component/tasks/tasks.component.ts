import { Component, input } from '@angular/core';
import { type Tasks } from '../../template/tasks.template';
import { type User } from '../../template/users.template';
import { TASKS } from '../../model/tasks.model';
import { TaskService } from '../../service/task.service';


@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  selected = input.required<User>();
  tsks: Tasks[] = TASKS;
  isAddingTask: boolean = false;

  constructor(private taskService: TaskService){}


  get selectedUserTask(): Tasks[] {
    return this.taskService.getSelectedTask(this.selected().uid);
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

  openAddTask(){
    this.isAddingTask = true;
  }

}
