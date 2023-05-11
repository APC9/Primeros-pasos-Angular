import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] =[
    {
      id: uuid(),
      name: 'yancha',
      power: 140
    },{
      id: uuid(),
      name: 'vegeta',
      power: 9500
    },{
      id: uuid(),
      name: 'Goku',
      power: 10500
    }
  ];

  onNewCaracter(character:Character):void{
    this.characters.push({...character, id: uuid() })
  }

  deleteCharacterById(id:string):void{
    this.characters = this.characters.filter( character => character.id !== id )
    //this.characters.splice(index,1)
  }
}

