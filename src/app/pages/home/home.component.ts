import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from 'src/app/services/auth.service';
import { AddToDoButtonComponent } from 'src/app/components/add-todo-button/add-todo-button.component';
import { ToDoListComponent } from 'src/app/components/todo-list/todo-list.component';
import { UserFormComponent } from 'src/app/components/user-form/user-form.component';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AddToDoButtonComponent, ToDoListComponent, UserFormComponent],
  templateUrl: './home.component.html',
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent {
  private _authService: AuthService = inject(AuthService);
  public user: User | null = null;

  constructor() {
    this._authService.user.subscribe(user => this.user = user);
  }
  
}
