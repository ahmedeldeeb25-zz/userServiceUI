import { Product } from './product';

export class Cart {


    id = {
        customersid:Number,
        productid: Number
    }

    product?: Product;
    quantity: Number;
    disable: boolean;


    constructor() {
        this.disable = true;
    }

    public createProduct(productId, quantity:Number) {
        this.quantity=quantity;
        this.id.productid = productId;
        

    }

}