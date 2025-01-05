import { NgModule } from "@angular/core";
import { DatePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TasksComponent } from "../component/tasks/tasks.component";
import { TaskComponent } from "../component/tasks/task/task.component";
import { NewTaskComponent } from "../component/tasks/new-task/new-task.component";

@NgModule({
    declarations:[TasksComponent, TaskComponent, NewTaskComponent],
    imports:[DatePipe, FormsModule],
    exports:[TasksComponent]
})
export class TaskModule{

}