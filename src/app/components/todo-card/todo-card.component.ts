import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDo } from 'src/app/models/todo';
import { RemoveTodoButtonComponent } from '../remove-todo-button/remove-todo-button.component';

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [CommonModule, RemoveTodoButtonComponent],
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent {
  @Input() todo!: ToDo;
}
