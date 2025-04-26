import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, Order } from './models';


@Injectable({
  providedIn: 'root'
})


export class OrderService {
  id: number = 0;
  user_id: number = 0;
  name = '';
  product_id: string = '';
  quantity: number = 0;
  amount: number = 0;
  address: string = '';
  date: Date = new Date();

  BASE_URL = 'http://localhost:8000';

  constructor(private http: HttpClient) { }
  
  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.BASE_URL}/api/orders/`);
  }

  getOrder(order_id: number): Observable<Order> {
    return this.http.get<Order>(`${this.BASE_URL}/api/orders/${order_id}/`);
  }

  postOrder(id: number, user_id: number, name: string, product_id: number, quantity: number, amount: number, address: string, date: Date): Observable<Order> {
    return this.http.post<Order>(`${this.BASE_URL}/api/orders/`, {
      id,
      user_id,
      name,
      product_id,
      quantity,
      amount,
      address,
      date
    });
  }
}
