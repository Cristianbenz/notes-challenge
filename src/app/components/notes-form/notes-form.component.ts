import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from "@angular/material/dialog"
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button'
import { NotesService } from 'src/app/services/notes.service';

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
  private _notesService: NotesService = inject(NotesService)

  public createForm = this._formBuilder.group({
    text: ['', Validators.required],
  })

  addNote() {
    const note = {
      text: String(this.createForm.value.text)
    }
    if(note.text) this._notesService.addNote(note)
  }

  closeForm() {
    this._dialog.close()
  }
}
