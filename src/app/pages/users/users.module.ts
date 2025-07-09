import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersComponent } from './users.component';
import { MatCardModule } from '@angular/material/card';
import { Routes, RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { UserManageComponent } from './user-manage/user-manage.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
  },
  {
    path: 'manage',
    component: UserManageComponent,
  },
  {
    path: 'manage/:id',
    component: UserManageComponent,
  },
];

@NgModule({
  declarations: [UsersComponent, UserManageComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
    RouterModule.forChild(routes),
  ],
})
export class UsersModule {}
