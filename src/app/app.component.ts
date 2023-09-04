import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-main></app-main>
  <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angutron';
}
