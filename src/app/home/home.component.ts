import { Component, OnInit } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';
import { DolarService } from '../services/dolar.service';
import { DolarInterface } from '../interfaces/dolar.interface';
import { CommonModule } from '@angular/common';
import { UsersService } from '../services/users.service';
import { Users } from '../interfaces/users.interface';


@Component({
  selector: 'app-home',
  standalone: true,
  imports:[CardsComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  data!: Users;
  loader:boolean =false
  constructor(private dolarService: DolarService, private users: UsersService){
    
  }
  
  ngOnInit(): void {
    this.getAllUsers();
    this.listAllDolars();
  }

  getAllUsers(){
    this.loader=true;
    this.users.getUsers().subscribe({next:(res: Users )=>{
      this.data = res;
   }, error:()=>{
     console.log("Error al buscar datos")
   }, complete:()=>{
  this.loader=false; 
  } })
  }

  getUser(ev: any){
  
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
  }

}