import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  mode = 'light_mode';

  changeTheme() {
    if (this.mode == 'light_mode') {
      this.mode = 'dark_mode';
    } else {
      this.mode = 'light_mode';
    }
  }
}
