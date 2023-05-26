import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.css']
})
export class EditPokemonComponent {

  @Input() editPokemon = {id:0, name:"", evolveLevel:0, type:[]};
  
  types:string="";
  @Output() changed = new EventEmitter<Pokemon>();

  sendUpEdits(){
    this.editPokemon.type = this.types.split(" , ");
    this.changed.emit(this.editPokemon)
  }

}
