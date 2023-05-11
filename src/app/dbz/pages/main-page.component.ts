import { Component } from '@angular/core';
import { Character } from '../interfaces';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page-component.html'
})

export class DbzComponent {

  constructor(
  private dbzService:DbzService
  ){}

  get characters():Character[]{
    return [...this.dbzService.characters];
  }

  onDeletecharacter(id:string):void{
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter( character:Character):void{
    this.dbzService.onNewCaracter(character)
  }
}
