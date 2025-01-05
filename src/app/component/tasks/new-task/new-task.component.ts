import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../../../template/new-task.template';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  etitle = signal('');
  esummary = signal('');
  edate = signal('');

  close = output<void>();
  add = output<NewTask>();

  onCancel(){
    this.close.emit();
  }

  onSubmit(){
     this.add.emit({
       title:this.etitle(),
       summary: this.esummary(),
       date:this.edate()
     });
     this.close.emit();
  }
}
