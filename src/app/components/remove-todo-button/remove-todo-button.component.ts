import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-remove-todo-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './remove-todo-button.component.html',
  styleUrls: ['./remove-todo-button.component.scss']
})
export class RemoveTodoButtonComponent {
  @Input() id: string = "";
  private _toDoService: ToDoService = inject(ToDoService);
  remove() {
    this._toDoService.remove(this.id);
  }
}
