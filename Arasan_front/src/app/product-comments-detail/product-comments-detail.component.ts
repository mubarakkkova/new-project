import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, Comment } from '../models';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-product-comments-detail',
  templateUrl: './product-comments-detail.component.html',
  styleUrls: ['./product-comments-detail.component.css']
})
export class ProductCommentsDetailComponent implements OnInit {
  comments: Comment[] = [];
  comment: Comment | any;


  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProductComments(1).subscribe((data) => {
      this.comments = data;
    })
  }

  getCommentsOfProduct(pk: number){
    this.productsService.getProductComments(pk).subscribe((data) => {
      this.comments = data;
    })
  }

  getCommentOfProduct(pk: number, comment_id: number){
    this.productsService.getProductComment(pk, comment_id).subscribe((data) => {
      this.comment = data;
    })
  }

}
