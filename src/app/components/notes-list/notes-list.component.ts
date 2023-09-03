import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

import { NoteCardComponent } from '../note-card/note-card.component';
import { NotesService } from 'src/app/services/notes.service';
import { Note } from 'src/app/models/note';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [CommonModule, NgFor, NoteCardComponent],
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {
  private _notesService: NotesService = inject(NotesService);
  public notes: Array<Note> = [];

  ngOnInit(): void {
    this.notes = this._notesService.getNotes()
  }
  
}
