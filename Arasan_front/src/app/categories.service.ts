import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, AuthToken } from './models';



@Injectable({
  providedIn: 'root'
})


export class CategoriesService {

  BASE_URL = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<AuthToken> {
    return this.http.post<AuthToken>(`${this.BASE_URL}/api/login/`, {
      username,
      password
    });
  }

  getCategories(): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/api/categories/`);
  }

  getCategory(pk: number): Observable<Category> {
    return this.http.get<Category>(`${this.BASE_URL}/api/categories/${pk}/`);
  }
}
