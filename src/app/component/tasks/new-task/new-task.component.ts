import { Component, input, output, signal } from '@angular/core';
import { User } from '../../../template/users.template';
import { TaskService } from '../../../service/task.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  etitle = signal('');
  esummary = signal('');
  edate = signal('');

  user = input.required<User>();
  close = output<void>();

  constructor(private taskService: TaskService) { }

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.taskService.addNewTask({
      title: this.etitle(),
      summary: this.esummary(),
      date: this.edate()
    }, this.user());
    this.close.emit();
  }
}
