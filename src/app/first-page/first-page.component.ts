import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table'

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent {
  mode = 'light_mode';

  changeTheme() {
    if (this.mode == 'light_mode') {
      this.mode = 'dark_mode';
    } else {
      this.mode = 'light_mode';
    }
  }
}
