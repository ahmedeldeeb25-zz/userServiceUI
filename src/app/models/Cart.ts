import {Product} from './product';
export class Cart {


    customersid: Number;
    productid: Number;
    product: Product;
    quantity: Number;
    disable:boolean;


	constructor() {
        this.disable=true;
	}
    
}