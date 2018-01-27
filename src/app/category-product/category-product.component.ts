import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.scss'],
  providers: [ProductService]

})
export class CategoryProductComponent implements OnInit {

  products: Product[] = [];
  catId: Number;
  // let categoryId=params['catId'];
  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) {
    //PathVariable 
    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
      this.catId = params['catId'];
      //http Service
      this.productService.getCategoryProducts(this.catId)
        .subscribe(data => {
          this.products = data;
          console.log(this.products);
        }, err => console.log("there is error " + err));

      console.log("aaaaaaaaaaaaaaa " + this.catId);
    });
  }

  ngOnInit() {

  }

  createRange(number) {
    var items: number[] = [];
    for (var i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }



}
