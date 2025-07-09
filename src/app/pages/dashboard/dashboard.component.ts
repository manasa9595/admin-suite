import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ROUTES } from '../../shared/constants';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  ROUTES = ROUTES;
}
