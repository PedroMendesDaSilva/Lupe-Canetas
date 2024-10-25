import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  countCarrinho:number = 0;

  addItemCarrinho(){
    this.countCarrinho++;
  }
}
