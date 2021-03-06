import { Component, OnInit } from '@angular/core';
import { CartModelServer } from 'src/app/models/cart/cart.module';
import { CartService } from 'src/app/services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartData !:CartModelServer
  cartTotal !:Number
  subTotal !:Number

  constructor(public cartService: CartService) { }

  ngOnInit() {
    this.cartService.cartDataObs$.subscribe(data => this.cartData = data);
    this.cartService.cartTotal$.subscribe(total => this.cartTotal = total);
 }

 ChangeQuantity(id: Number, increaseQuantity: Boolean) {
   this.cartService.UpdateCartData(id, increaseQuantity);
 }
}
