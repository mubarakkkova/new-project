import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { BasketComponent } from './basket/basket.component';
import { CategoriesComponent } from './categories/categories.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { TopBarComponent } from './top-bar/top-bar.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { AuthIntercaptor } from './AuthInterceptor';
import { CategoryIdComponent } from './category-id/category-id.component';
import { OrderComponent } from './order/order.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { ProductCommentsComponent } from './product-comments/product-comments.component';
import { ProductCommentsDetailComponent } from './product-comments-detail/product-comments-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    HomePageComponent,
    ProductDetailsComponent,
    BasketComponent,
    CategoriesComponent,
    TopBarComponent,
    MyAccountComponent,
    CategoryIdComponent,
    OrderComponent,
    OrderDetailComponent,
    ProductCommentsComponent,
    ProductCommentsDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthIntercaptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
