import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddNoteButtonComponent } from 'src/app/components/add-note-button/add-note-button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AddNoteButtonComponent],
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

}
