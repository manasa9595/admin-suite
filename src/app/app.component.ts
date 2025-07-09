import { Component } from '@angular/core';
import { APP_TITLE, ROUTES } from './shared/constants';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = APP_TITLE;
  ROUTES = ROUTES;
}
