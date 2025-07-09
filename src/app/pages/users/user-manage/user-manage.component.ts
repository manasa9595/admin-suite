import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ROUTES } from '../../../shared/constants';

@Component({
  standalone: false,
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.scss'],
})
export class UserManageComponent implements OnInit {
  ROUTES = ROUTES;
  mode: 'view' | 'edit' | 'add' = 'add';
  userId: string | null = null;
  user = {
    name: '',
    role: '',
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    const queryMode = this.route.snapshot.queryParamMap.get('mode');

    if (this.userId) {
      this.mode = queryMode === 'view' ? 'view' : 'edit';
      // Load user data here by ID (mock for now)
      this.user = {
        name: 'John Doe',
        role: 'Admin',
      };
    } else {
      this.mode = 'add';
    }
  }

  onSave(): void {
    if (this.mode === 'add') {
      console.log('Creating user:', this.user);
    } else {
      console.log('Updating user:', this.user);
    }
    this.router.navigate([ROUTES.USERS]);
  }
}
