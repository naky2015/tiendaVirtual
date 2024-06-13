import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ProducsArray, Product } from '../interfaces/productos';
import { ProductsService } from '../services/products.service';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, ProductDetailComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
closeModal() {
   this.individualProduct
}
@Input()list!: any;
individualProduct: any; 
productService= inject(ProductsService)

constructor(private user: UsersService){}


getProduct(ev : number){
  this.productService.getIndividualProduct(ev).subscribe(res=>{
    this.individualProduct= res.results[0]

  }
  )
  
}

}
