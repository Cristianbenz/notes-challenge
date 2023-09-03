import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Note } from 'src/app/models/note';

@Component({
  selector: 'app-note-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent {
  @Input() note!: Note;
}
