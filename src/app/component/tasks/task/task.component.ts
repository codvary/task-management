import { Component, input, output } from '@angular/core';
import { type Tasks } from '../../../template/tasks.template';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  task = input.required<Tasks>();
  completed = output<Tasks>();

  onTaskComplete(){
    this.completed.emit(this.task());
  }
}
