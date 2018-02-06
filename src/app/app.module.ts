//Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router/src/router';


//Custom Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CategoryComponent } from './category/category.component';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { OfferSliderComponent } from './offer-slider/offer-slider.component';
import { ProductComponent } from './product/product.component';
import { CollectionComponent } from './collection/collection.component';
import { FooterComponent } from './footer/footer.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { CategoryProductComponent } from './category-product/category-product.component';
import { SiteComponent } from './site/site.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { AppRoutingModule } from './app-routing.module';
import { CartComponent } from './cart/cart.component';

//import { SiteComponent } from './site/site.component';
// import { SigninComponent } from './signin/signin.component';



@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SigninComponent,
    LoginComponent,
    HeaderComponent,
    CategoryComponent,
    MainSliderComponent,
    OfferSliderComponent,
    ProductComponent,
    CollectionComponent,
    FooterComponent,
    SiteComponent,
    CategoryProductComponent,
    SingleProductComponent,
    CartComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // RouterModule.forRoot(appRoutes, { enableTracing: true }),
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
