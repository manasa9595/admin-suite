import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DEFAULT_PAGE_SIZE,PAGE_SIZE_OPTIONS, ROUTES } from '../../shared/constants';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  standalone: false,
})
export class UsersComponent implements AfterViewInit {
  DEFAULT_PAGE_SIZE = DEFAULT_PAGE_SIZE;
  PAGE_SIZE_OPTIONS = PAGE_SIZE_OPTIONS;
  ROUTES = ROUTES
  displayedColumns: string[] = ['id', 'name', 'role', 'actions'];

  users = [
    { id: 1, name: 'Alice', role: 'Admin' },
    { id: 2, name: 'Bob', role: 'User' },
    { id: 3, name: 'Charlie', role: 'User' },
    { id: 4, name: 'Daisy', role: 'Manager' },
    { id: 5, name: 'Ethan', role: 'Viewer' },
    { id: 6, name: 'Fiona', role: 'User' },
    { id: 7, name: 'George', role: 'Admin' },
    { id: 8, name: 'Hannah', role: 'User' },
  ];

  dataSource = new MatTableDataSource(this.users);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
