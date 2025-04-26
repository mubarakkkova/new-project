import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { AboutPageComponent } from './about-page/about-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { BasketComponent } from './basket/basket.component';
import { CategoriesComponent } from './categories/categories.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { CategoryIdComponent } from "./category-id/category-id.component";
import { ProductCommentsComponent } from "./product-comments/product-comments.component";
import { ProductCommentsDetailComponent } from "./product-comments-detail/product-comments-detail.component";


const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', component: AboutPageComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'myAccount', component: MyAccountComponent },
  { path: 'categories', component: CategoriesComponent, children: [
    { path: ':pk/products', component: CategoryIdComponent },
    { path: ':pk/products/:product_id', component: ProductDetailsComponent },
  ] },


  { path: 'products/:pk/comments', component: ProductCommentsComponent },
  { path: 'products/:pk/comments/:comment_id', component: ProductCommentsDetailComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
