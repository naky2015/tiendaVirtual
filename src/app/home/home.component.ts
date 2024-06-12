import { Component, OnInit, inject } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';
import { DolarService } from '../services/dolar.service';
import { DolarInterface } from '../interfaces/dolar.interface';
import { CommonModule } from '@angular/common';
import { UsersService } from '../services/users.service';
import { Users } from '../interfaces/users.interface';
import { ProductsService } from '../services/products.service';
import { ProducsArray, Product } from '../interfaces/productos';


@Component({
  selector: 'app-home',
  standalone: true,
  imports:[CardsComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  data!: Product[];
  loader:boolean =false
  products= inject(ProductsService)

  constructor(private dolarService: DolarService, 
    private users: UsersService){
    
  }
  
  ngOnInit(): void {
    this.getAllProducts()
    /* this.getAllUsers();
    this.listAllDolars(); */
  }

/*   getAllUsers(){
    this.loader=true;
    this.users.getUsers().subscribe({next:(res: Users )=>{
      this.data = res;
   }, error:()=>{
     console.log("Error al buscar datos")
   }, complete:()=>{
  this.loader=false; 
  } })
  }


  listAllDolars(){
    this.loader=true;
    this.dolarService.listDolars().subscribe({next:(data:DolarInterface[])=>{
      data.forEach(element => {
      
      } )
      
      this.loader=false;
      

    },error: ()=>{
      console.log("Error al buscar datos")
    }, complete:()=>{
    } })
  } */

  getAllProducts(){
    this.products.getProducts().subscribe((res:ProducsArray)=>{
      /* console.log("Productos: ", res) */
    this.data = res.results

    })
  }

}