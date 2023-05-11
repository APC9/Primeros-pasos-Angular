import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character:Character ={
    id: '123',
    name:'',
    power:0
  }

  emitCharacter():void{
    if ( this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character = { name: '', power:0, id: ''}
  }


}
