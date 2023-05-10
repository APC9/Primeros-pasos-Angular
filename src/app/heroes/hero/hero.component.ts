import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'Iroman';
  public age: number = 45;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`
  }

  changeName():void{
    this.name = 'Tarzan'
  }

  changeAge( value?:number ):void{
    this.age = value || 32
  }

  resetForm():void{
    this.name= 'Iroman';
    this.age=45
  }
}
