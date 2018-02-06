//Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { Routes,RouterModule } from '@angular/router';
import { Router } from '@angular/router/src/router';
//Custom Components
// import { SiteComponent } from './site.component';
// import { HeaderComponent } from '../header/header.component';
// import { CategoryComponent } from '../category/category.component';
// import { MainSliderComponent } from '../main-slider/main-slider.component';
// import { OfferSliderComponent } from '../offer-slider/offer-slider.component';
// import { ProductComponent } from '../product/product.component';
// import { CollectionComponent } from '../collection/collection.component';
// import { FooterComponent } from '../footer/footer.component';

import { SingleProductComponent } from '../single-product/single-product.component';
import { CategoryProductComponent } from '../category-product/category-product.component';

 import { MainPageComponent } from '../main-page/main-page.component';
import { SiteComponent } from './site.component';
 



const appRoutes:Routes=[
  {path:'', component: MainPageComponent},
  {path:'category/:catId/products',component:CategoryProductComponent},
  {path:"product/:productId/details",component:SingleProductComponent}
  /*
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  */
];
@NgModule({
  declarations: [
    
    // HeaderComponent,
    // CategoryComponent,
    // MainSliderComponent,
    // OfferSliderComponent,
    // ProductComponent,
    // CollectionComponent,
    // FooterComponent,
    SingleProductComponent,
    CategoryProductComponent,
    MainPageComponent,
    
    
     
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
   
   
    RouterModule.forRoot(appRoutes ,{ enableTracing: true })
  ],
  providers: [],
  bootstrap: []
})
export class SiteModule { }

