import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from "@angular/material/button"
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { ToDoFormComponent } from '../todo-form/todo-form.component';

@Component({
  selector: 'app-add-todo-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule],
  templateUrl: './add-todo-button.component.html'
})
export class AddToDoButtonComponent {
  private _dialogRef = inject(MatDialog);

  openForm() {
    this._dialogRef.open(ToDoFormComponent)
  }
}
