import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserComponent],
  template: `
    <h1>Welcome to you!</h1>
    <app-user></app-user>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
