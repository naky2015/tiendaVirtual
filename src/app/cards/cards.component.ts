import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
@Input()list : any;

constructor(private user: UsersService){}


getUser(ev : number){
  console.log(ev);
  this.user.getUser(ev).subscribe((res)=>console.log(res))
}

}
