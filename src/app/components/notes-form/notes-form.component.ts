import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from "@angular/material/dialog"
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-notes-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './notes-form.component.html',
  styleUrls: ['./notes-form.component.scss']
})
export class NotesFormComponent {
  private _dialog: MatDialogRef<NotesFormComponent> = inject(MatDialogRef<NotesFormComponent>)
  private _formBuilder: FormBuilder = inject(FormBuilder);

  public createForm = this._formBuilder.group({
    text: ['', Validators.required],
  })

  addNote() {
    console.log(this.createForm.value)
  }

  closeForm() {
    this._dialog.close()
  }
}
