import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './categories.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BSS-project';

  logged = false;
  username = '';
  password = '';

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }
  }


  constructor(private categoriesService: CategoriesService) {}


  login() {
    this.categoriesService.login(this.username, this.password).subscribe((data) => {

      localStorage.setItem('token', data.token);

      console.log(data, data.token)

      this.logged = true;
      this.username = '';
      this.password = '';
    });
  }

  logout() {
    this.logged = false;
    localStorage.removeItem('token');
  }

}
