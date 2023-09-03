import { Component } from '@angular/core';

import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {

}
