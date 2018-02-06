import { NgModule } from '@angular/core';
import { Routes ,RouterModule} from '@angular/router';


import { CollectionComponent } from './collection/collection.component';
import { FooterComponent } from './footer/footer.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { CategoryProductComponent } from './category-product/category-product.component';
import { SiteComponent } from './site/site.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { CartComponent } from './cart/cart.component';

const appRoutes: Routes = [
  {
    path: '',
    component: SiteComponent,
    children: [
      { path: '', component: MainPageComponent },
      { path: 'category/:catId/products', component: CategoryProductComponent ,pathMatch: 'prefix'},
      { path: 'product/:productId/details', component: SingleProductComponent,pathMatch: 'prefix' },
      {path: 'customers/:userId/carts',component:CartComponent}
    ]
  },
  //no layout routes
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SigninComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }


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
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  exports: [
    RouterModule
],
  declarations: []
})
export class AppRoutingModule { }
