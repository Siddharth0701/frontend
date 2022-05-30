import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CartModelServer } from 'src/app/models/cart/cart.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartData:CartModelServer | undefined;
  cartTotal!:Number;

  constructor(public cartService:CartService ) { }

  ngOnInit(){
    this.cartService.cartTotal$.subscribe(total => {
      this.cartTotal = total;
  });
  this.cartService.cartDataObs$.subscribe(data =>this.cartData =data);
}

}
