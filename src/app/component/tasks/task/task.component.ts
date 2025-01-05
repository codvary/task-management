import { Component, input } from '@angular/core';
import { type Tasks } from '../../../template/tasks.template';
import { TaskService } from '../../../service/task.service';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  task = input.required<Tasks>();

  constructor(private taskService: TaskService){}

  onTaskComplete(){
    this.taskService.removeSelectedTask(this.task().tid);
  }
}
