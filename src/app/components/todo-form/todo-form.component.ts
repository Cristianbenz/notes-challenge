import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from "@angular/material/dialog"
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button'
import { ToDoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class ToDoFormComponent {
  private _dialog: MatDialogRef<ToDoFormComponent> = inject(MatDialogRef<ToDoFormComponent>)
  private _formBuilder: FormBuilder = inject(FormBuilder);
  private _toDosService: ToDoService = inject(ToDoService)

  public createForm = this._formBuilder.group({
    title: ["", Validators.required],
    description: ["", Validators.required],
  })

  addNote() {
    const todo = {
      id: new Date().toLocaleString().replace(" ", ''),
      title: String(this.createForm.value.title),
      description: String(this.createForm.value.description)
    }
    if(todo.title && todo.description) {
      this._toDosService.add(todo)
      this._dialog.close()
    }
  }

  closeForm() {
    this._dialog.close()
  }
}
