import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  mode = 'light_mode';

  changeTheme() {
    if (this.mode == 'light_mode') {
      this.mode = 'dark_mode';
    } else {
      this.mode = 'light_mode';
    }
  }
}
