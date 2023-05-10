import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{counter}}</h3>

    <button (click)="increaseBy()" >+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="decrementBy(1)" >-1</button>
  `
})

export class CounterComponent {

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
