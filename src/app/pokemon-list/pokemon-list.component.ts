import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  pokemon:Pokemon[] =[
    {id: 25, name: "Pikachu", evolveLevel:-1, type:["Electric"]},
    {id: 129, name: "Magikarp", evolveLevel: 20, type:["Water"]},
    {id: 140, name: "Chansey", evolveLevel:-1, type:["Normal"]},
    {id: 9, name: "Charizard", evolveLevel:-1, type:["Fire", "Flying"]}
  ];

  addPokemon(p:Pokemon):void{
    this.pokemon.push(p);
  }

}
