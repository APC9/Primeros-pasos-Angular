import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public title:string = 'Mi primera app de Angular';
  public counter:number = 10;

  increaseBy():void {
    this.counter += 1;
  }

  decrementBy(value:number = 1):void {
    this.counter -= value;
  }

  reset():void{
    this.counter = 10;
  }
}
