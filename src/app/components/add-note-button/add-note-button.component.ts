import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from "@angular/material/button"
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { NotesFormComponent } from '../notes-form/notes-form.component';

@Component({
  selector: 'app-add-note-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule],
  templateUrl: './add-note-button.component.html',
  styleUrls: ['./add-note-button.component.scss']
})
export class AddNoteButtonComponent {
  private _dialogRef = inject(MatDialog);

  openForm() {
    this._dialogRef.open(NotesFormComponent)
  }
}
