import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDo } from 'src/app/models/todo';
import { RemoveTodoButtonComponent } from '../remove-todo-button/remove-todo-button.component';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [CommonModule, RemoveTodoButtonComponent],
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition('in <=> out', animate('500ms ease-in-out')),
      transition(':enter', [
        style({ transform: "scale(0)" }),
        animate('400ms', style({ transform: "scale(1)" })),
      ]),
      transition(':leave', [
        style({ transform: "scale(1)" }),
        animate('400ms', style({ transform: "scale(0)" }))
      ])
    ])
]
})
export class TodoCardComponent {
  @Input() todo!: ToDo;
}
