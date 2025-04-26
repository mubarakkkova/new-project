import { Component, OnInit } from '@angular/core';

import { Category } from '../models';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  categories: Category[] = [{"id": 1, "name": "Chinese cuisine", "description": "Chinese cuisine is one of the oldest and most diverse cuisines in the world. Two thousand years before the beginning of our era, people they ate noodles. Even today each province \u2013 there are twenty-threats e in total \u2013 has its own cooking style, based on regional ingredients and preferences.", "image": "./assets/images/Catergories/catergory_1.jpeg"}, {"id": 2, "name": "Fast food", "description": "Fast food, fast food dish, fast food product, fast food - food with reduced consumption and cooking time, with simplified or abolished cutlery or off the table.", "image": "./assets/images/Catergories/catergory_2.jpeg"}, {"id": 3, "name": "Confectionery", "description": "Confectionery is the art of making confectionery, which is food rich in sugar and carbohydrates.", "image": "./assets/images/Catergories/catergory_3.jpeg"}, {"id": 4, "name": "French cuisine", "description": "There are many dishes that are considered part of French national cuisine today. A meal often consists of three courses, hors d'\u0153uvre or entr\u00e9e (introductory course, sometimes soup), plat principal (main course), fromage (cheese course) or dessert, sometimes with a salad offered before the cheese or dessert.", "image": "./assets/images/Catergories/catergory_4.jpeg"}, {"id": 5, "name": "Italian cuisine", "description": "There are many dishes that are considered part of French national cuisine today. A meal often consists of three courses, hors d'\u0153uvre or entr\u00e9e (introductory course, sometimes soup), plat principal (main course), fromage (cheese course) or dessert, sometimes with a salad offered before the cheese or dessert.", "image": "./assets/images/Catergories/catergory_5.jpeg"}, {"id": 6, "name": "Kazakh cuisine", "description": "The main dishes are meat. Among them, a special place is occupied by the most common dish called in the Kazakh language et, which means meat in translation. Russian names for the dish are Kazakh meat, beshbarmak.", "image": "./assets/images/Catergories/catergory_6.jpeg"}, {"id": 7, "name": "Seafood cuisine", "description": "Seafood dishes or fish dishes are special food dishes that use seafood as the main ingredients and are ready to be served or eaten with any necessary preparation or preparation.", "image": "./assets/images/Catergories/catergory_7.jpeg"}, {"id": 8, "name": "Drinks", "description": "A drink is a liquid intended for drinking.", "image": "./assets/images/Catergories/catergory_8.jpeg"}];; 

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categoriesService.getCategories().subscribe((data) => {
      this.categories = data;
    })
  }

}
