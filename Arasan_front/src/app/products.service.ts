import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, Comment, Order } from './models';
import { Observable } from 'rxjs';
import {formatDate} from '@angular/common'

formatDate(new Date(), 'yyyy/MM/dd', 'en');


@Injectable({
  providedIn: 'root'
})


export class ProductsService {
  items: Product[] = [];
  BASE_URL = 'http://localhost:8000';

  id: number = 0;
  user_id: number = 0;
  username = '';
  email: string = '';
  product_id: string = '';
  body: string = '';
  date: Date = new Date();

  constructor(private http: HttpClient) { }

  addToOrder(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearOrder() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

  removeProduct(product: Product) {
    const index: number = this.items.indexOf(product);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
    return this.items;
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URL}/api/products/`);
  }

  getProduct(product_id: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URL}/api/products/${product_id}/`);
  }

  getProductsOfCategory(pk: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URL}/api/categories/${pk}/products/`);
  }

  getProductOfCategory(pk: number, product_id: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URL}/api/categories/${pk}/products/${product_id}/`);
  }

  getProductComments(pk: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.BASE_URL}/api/products/${pk}/comments/`);
  }

  getProductComment(pk: number, comment_id: number): Observable<Comment> {
    return this.http.get<Comment>(`${this.BASE_URL}/api/products/${pk}/comments/${comment_id}/`);
  }

  postComment(pk: number, id: number, user_id: number, username: string, email: string, product_id: number, body: string, date: Date): Observable<Order> {
    return this.http.post<Order>(`${this.BASE_URL}/api/products/${pk}/comments/`, {
      id,
      user_id,
      username,
      email,
      product_id,
      body,
      date
    });
  }

}
