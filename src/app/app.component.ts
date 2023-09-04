import { Component } from '@angular/core';

import { HomeComponent } from './pages/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, NavBarComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {

}
