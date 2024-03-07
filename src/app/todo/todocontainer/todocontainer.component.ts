import { Component } from '@angular/core';
import { TodoFormComponent } from '../todoform/todoform.component';
import { TodoListComponent } from '../todolist/todolist.component';

@Component({
  selector: 'app-todocontainer',
  standalone: true,
  imports: [TodoFormComponent, TodoListComponent],
  templateUrl: './todocontainer.component.html',
  styleUrl: './todocontainer.component.css'
})
export class TodoContainerComponent {

}
