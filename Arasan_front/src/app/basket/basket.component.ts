import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Order, Product } from '../models';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  user_orders: Order[] = [];
  user_order: Order | any;

  constructor(private productsService: ProductsService, private orderService: OrderService) {
    this.generalPrice = 0;
    this.items = this.productsService.getItems();
    for (let i of this.items) {
      this.generalPrice = this.generalPrice + i.price;
    }
    this.generalPrice = this.generalPrice.toFixed(2);
  }

  ngOnInit(): void {
  }

  items: any;
  generalPrice: any;
  id_of_user: number = 0;

  removeProduct(product: Product) {
    this.productsService.removeProduct(product);
    this.generalPrice -= product.price;
  }

  getOrdersOfUser(){
    this.orderService.getOrders().subscribe((data) => {
      // this.user_orders = data.filter(ord => ord.user_id === UserName)
      this.user_orders = data;
    })
  }

  getOrderOfUser(order_id: number){
    this.orderService.getOrder(order_id).subscribe((data) => {
      this.user_order = data;
      this.id_of_user = data.user_id;
    });
  }

  // toOrder(product: Product[]){
  //   for (var i = 0; i<product.length; ++i){
  //     this.orderService.postOrder()
  //   }
  

}
