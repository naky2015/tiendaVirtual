import { Component, OnInit, inject } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';
import { DolarService } from '../services/dolar.service';
import { DolarInterface } from '../interfaces/dolar.interface';
import { CommonModule } from '@angular/common';
import { UsersService } from '../services/users.service';
import { Users } from '../interfaces/users.interface';
import { ProductsService } from '../services/products.service';
import { ProducsArray, Product } from '../interfaces/productos';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports:[CardsComponent, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  data!: Product[];
  loader:boolean =false
  products= inject(ProductsService)
  filteredData!: Product[]| null;
  searchData:string ='';
  constructor(private dolarService: DolarService, 
    private users: UsersService){
    
  }
  
  ngOnInit(): void {
    this.getAllProducts()
   }

  getAllProducts(){
    this.products.getProducts().subscribe((res:ProducsArray)=>{
    this.data = res.results

    })
  }

  getFileteredPruducts(){
    this.filteredData = this.data.filter((product: Product)=>{
      
      return product.nombre_producto.includes(this.searchData)

    })
  }
}