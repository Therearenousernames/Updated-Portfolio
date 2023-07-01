import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  mode = 'light_mode';

  changeTheme() {
    if (this.mode == 'light_mode') {
      this.mode = 'dark_mode';
    } else {
      this.mode = 'light_mode';
    }
  }
}
