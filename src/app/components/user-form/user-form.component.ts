import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBarModule, MatSnackBar } from "@angular/material/snack-bar"
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSnackBarModule, MatButtonModule],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  private _authService: AuthService = inject(AuthService);
  private _snack = inject(MatSnackBar);
  public state: "signIn" | "signUp" = "signIn";
  public username: string = "";

  signIn() {
    const response = this._authService.signIn(this.username);
    if(!response) this._snack.open("User does not exist", 'Close', {
      duration: 1700
    });
  }

  signUp() {
    const response = this._authService.signUp(this.username);
    if(!response) this._snack.open("User already exist", 'Close', {
      duration: 1700
    });
  }

  changeState() {
    this.state = this.state === "signIn"? "signUp" : "signIn";
  }
}
