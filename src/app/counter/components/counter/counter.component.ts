import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>Hola Counter</h1>
   

    <hr />
    <div class="">
      <button (click)="increaseBy(+1)">+</button>
      <p>{{ counter }}</p>
      <button (click)="increaseBy(-1)">-</button>

      <button (click)="resetCounter()">reset</button>
    </div>
  `,
})
export class CounterComponent {

    public counter:number = 10;

    increaseBy( value:number):void{
      
      this.counter+=value;
    }
    resetCounter():void{
      
      this.counter=10;
    }
  
}
