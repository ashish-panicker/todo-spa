import { Component } from '@angular/core';
import { TodoItemComponent } from '../todoitem/todoitem.component';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [TodoItemComponent],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodoListComponent {

}
