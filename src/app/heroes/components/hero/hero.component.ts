import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public nombre:string = 'Diego';
  public edad:  number = 24;
  
  get capitalized():string {
    return this.nombre.toUpperCase();
  }

  getHeroDescriptions():string {
    
    return `${this.nombre} - ${this.edad}`;
  }
  changenHero():void {
  
       this.nombre = 'Pedro';
  }
  changenAge():void {
    
     this.edad = 12;
  }
  resetForm():void {
    
    this.nombre = 'Diego';
    this.edad = 24;
  }


}
