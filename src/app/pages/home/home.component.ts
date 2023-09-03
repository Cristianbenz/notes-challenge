import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddToDoButtonComponent } from 'src/app/components/add-todo-button/add-todo-button.component';
import { ToDoListComponent } from 'src/app/components/todo-list/todo-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AddToDoButtonComponent, ToDoListComponent],
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

}
