import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddNoteButtonComponent } from 'src/app/components/add-note-button/add-note-button.component';
import { NotesListComponent } from 'src/app/components/notes-list/notes-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AddNoteButtonComponent, NotesListComponent],
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

}
