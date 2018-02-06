import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/Category';
declare var $;
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit, AfterViewChecked {

  nums = [];

  sub_Category = [];
  Main_Category: Category[] = [];
  n: Number = 0;
  constructor(private CategorySer: CategoryService) {

 


  }

  ngOnInit() {
    // function to handle click to open category sidebar in mobileview
    $(document).on('click', '.category-sidebar-btn', function () {
      $('.category-sidebar').addClass('active').parents('body').addClass('sidebar-oppend');
    });


    //Restful Resources
    this.CategorySer.getMainCategories().
      subscribe(data => {
        console.log("data " + data);
        this.Main_Category = data;
      }, error => console.log("Error :: " + error)
      );

  }

  ngAfterViewChecked(): void {
    for (let sub of this.sub_Category) {
      console.log("xx " + sub.name);
    }


  }


}
