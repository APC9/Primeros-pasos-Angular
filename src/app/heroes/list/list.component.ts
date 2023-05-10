import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = [ 'Spideman', 'Hulk', 'thor', 'Woderwoman'];
  public deleteHeroe?: string;

  removeLastHero():void{
    this.deleteHeroe = this.heroNames.pop()
  }

}
