import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, Category } from '../models';
import { ProductsService } from '../products.service';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {

  // categories: Category[] = [];
  // products: Product[] = [];

  curCategory: any;

  curProduct: Product[] = []
  nextProduct: Product[] = []
  prevProduct: Product[] = []


  constructor(private categoriesService: CategoriesService, private productsService: ProductsService, private route: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.getProduct();
  }
  

  getProduct(){
    this.route.paramMap.subscribe((params) => {
      const pk = parseInt(params.get('pk') || '{}');
      const product_id = parseInt(params.get('product_id') || '{}');

      this.categoriesService.getCategory(pk).subscribe((data) => {
        this.curCategory = data;
      })

      this.productsService.getProductOfCategory(pk, product_id).subscribe((data1) => {
        this.curProduct = data1;
      })

      this.productsService.getProductOfCategory(pk, product_id + 1).subscribe((data2) => {
        this.nextProduct = data2;
      })

      this.productsService.getProductOfCategory(pk, product_id - 1).subscribe((data3) => {
        this.prevProduct = data3;
      })
    })

  }

  addToCart(product: Product) {
    this.productsService.addToOrder(product);
  }

}
