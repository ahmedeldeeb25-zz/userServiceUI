import { Component, OnInit } from '@angular/core';
import { Comment } from '../models/Comment';
import { Router, ActivatedRoute } from '@angular/router';

//Custom Services
import { CommentService } from '../services/comment.service';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

declare var $;
@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss'],
  providers: [CommentService, ProductService]
})
export class SingleProductComponent implements OnInit {

  product: Product;
  single_item = {
    name: '',
    id: ''
  }
  user = {

    username: '',
    Email: '',
    comment: ''
  }
  finalresult;

  comments: Comment[] = [];

  comment = new Comment();
  id: Number;

  public createComment() {

    if (this.user.comment == ""){
      console.log("Please insert a comment");
    }else {
      console.log(this.user.Email + " " + this.user.comment + " " + this.user.username);
      this.comment._comment = this.user.comment;
      this.comment.user_id = 1;
      console.log(this.comment);
      //insert th comment
      this.commentService.createComments(this.comment).subscribe(data => {
        console.log(this.comments);
      }, error => console.log("Error :: " + error));

      this.user.comment = "";

    }

  }

  constructor(private route: ActivatedRoute,
    private commentService: CommentService, private productService: ProductService) {

    this.route.params.subscribe(params => {
      this.comment._post_id = +params['productId']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
      //Get single Product

      this.productService.getSingleProduct(this.comment.post_id).
        subscribe(data => {
          console.log("----------------------" + data);
          this.product = data;
        }, error => console.log("Error::" + error));

    });

    //Get comments
    this.commentService.getComments().subscribe(data => {
      this.comments = data;
      console.log(this.comments);
    }, error => console.log("Error :: " + error));








    // to zoom in single product
    this.single_item = {
      name: "preview",
      id: "zoom"
    }

    this.finalresult = 1;
    this.user = {

      username: '',
      Email: '',
      comment: ''
    }


  }

  ngOnInit() {
    // to navigate between tabs


    var $tabs = $('.tabs');
    var panels = $('.tab-content');
    $tabs.on('click', 'a', function () {

      var id = $(this).attr('id');
      //detect current tab and turn it to selected off
      $tabs.find('[aria-selected="true"]').attr('aria-selected', false);
      $(this).attr('aria-selected', true);
      panels.filter('[aria-hidden="false"]').attr('aria-hidden', true);
      $(this).attr('aria-hidden', true);
      // console.log(id);
      $(id).attr('aria-hidden', false);
    });

    var clikComment = $('#showForm');
    var userform = $('#usercommentform');

    clikComment.on('click', 'a', function () {
      userform.toggleClass('active');
    });
  }


  zooming() {
    console.log('zoom');
    $("zoom").elevateZoom({ tint: true, tintColour: '#F90', tintOpacity: 0.5 });
  }

  plus() {

    if (!isNaN(this.finalresult)) {
      this.finalresult++;

    }
    return this.finalresult;
  }
  minus() {

    if (!isNaN(this.finalresult) && this.finalresult > 1) {
      this.finalresult--;

    }

    return this.finalresult;
  }

}
