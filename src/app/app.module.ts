//Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { Routes,RouterModule } from '@angular/router';

//Custom Components
 
import { Router } from '@angular/router/src/router';
 
import { AccountComponent } from './account/account.component';
import { SiteComponent } from './site/site.component';
import { SiteModule } from './site/site.module';
import { AppComponent } from './app.component';


const appRoutes:Routes=[
  {path:'account/', component: AccountComponent },
  {path:'',component:SiteComponent},
  
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
     
    AccountComponent,
    SiteComponent,
     
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
    //,{ enableTracing: true }
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
