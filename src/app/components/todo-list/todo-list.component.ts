import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

import { TodoCardComponent } from '../todo-card/todo-card.component';
import { ToDoService } from 'src/app/services/todo.service';
import { ToDo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, NgFor, TodoCardComponent],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  private _notesService: ToDoService = inject(ToDoService);
  public todoList: Array<ToDo> = [];

  ngOnInit(): void {
    this._notesService.todos.subscribe((todos: Array<ToDo>) => this.todoList = todos);
  }
  
}
