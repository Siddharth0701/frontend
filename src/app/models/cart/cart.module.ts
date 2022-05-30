import { ProductModelServer } from "../product/product.module";


export interface CartModelServer {
  total: Number;
  data: [{
    product : ProductModelServer,
    numInCart: Number
  }];
}

export interface CartModelPublic {
  total: Number;
  prodData: [{
    id: Number,
    incart: Number
  }]
}

