import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category, Product } from '../models';
import { CategoriesService } from '../categories.service';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-category-id',
  templateUrl: './category-id.component.html',
  styleUrls: ['./category-id.component.css']
})
export class CategoryIdComponent implements OnInit {

  categories: Category[] = [];
  curCategory: Category | any = {"id": 1, "name": "Chinese cuisine", "description": "Chinese cuisine is one of the oldest and most diverse cuisines in the world. Two thousand years before the beginning of our era, people they ate noodles. Even today each province \u2013 there are twenty-threats e in total \u2013 has its own cooking style, based on regional ingredients and preferences.", "image": "./assets/images/Catergories/catergory_1.jpeg"};
  products: Product[] = [{"id": 1, "name": "Chinese noodles", "price": 24.95, "description": "We cook Chinese udon noodles with vegetables and mushrooms. The recipe is simple and quick, especially if you cook in a wok pan. Noodles turn out to be satisfying and very tasty! A great option for dinner.", "image": "./assets/images/Products/Category 1, Chinese cuisine/Chinese noodles.jpeg", "likes": 159, "link_to_product": "http://127.0.0.1:8000/api/products/1/", "rating": 3, "category_id": 1}, {"id": 2, "name": "Yangzhou Fried Rice", "price": 35.0, "description": "Yangzhou fried rice is a popular Chinese-style wok fried rice dish in many Chinese restaurants throughout the world. It is commonly sold in the UK as special fried rice and in the US as house special fried rice.", "image": "./assets/images/Products/Category 1, Chinese cuisine/Yangzhou Fried Rice.jpeg", "likes": 17, "link_to_product": "http://127.0.0.1:8000/api/products/2/", "rating": 0, "category_id": 1}];

  constructor(private categoriesService: CategoriesService, private productsService: ProductsService, private route: ActivatedRoute) {}


  ngOnInit() {
    this.getCategories();
    this.getProducts();
   }

  getCategories(){
    this.categoriesService.getCategories().subscribe((data) => {
      this.categories = data;
    })
  }

  getProducts() {
    this.route.paramMap.subscribe((params) => {
      const pk = parseInt(params.get('pk') || '{}');

      this.categoriesService.getCategory(pk).subscribe((data) => {
        this.curCategory = data;
      })

      this.productsService.getProductsOfCategory(pk).subscribe((data) => {
        this.products = data;
      })
    })
  }

}
