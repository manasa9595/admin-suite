import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@Component({
  standalone: true,
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  imports: [CommonModule, MatCardModule, MatTableModule],
})
export class OrdersComponent {
  orders = [
    { id: 'ORD001', customer: 'Alice', status: 'Shipped' },
    { id: 'ORD002', customer: 'Bob', status: 'Pending' },
  ];
  displayedColumns = ['id', 'customer', 'status'];
}
