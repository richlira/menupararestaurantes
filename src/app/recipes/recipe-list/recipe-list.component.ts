import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

	recipes: Recipe[] = [];
	@Output() recipeSelected = new EventEmitter<Recipe>();
	recipe = new Recipe('Tacos de Suadero', 'Tacos de Suadero de primera en doble tortilla con complementos de cebolla, cilantro y limon. Te aconsejamos comerlo con la salsa de la Casa.', 'http://static.wixstatic.com/media/5e4d62_2a083813e92fae73b2b5c3ea6b03d256.png_1024');

  
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe){
  	this.recipeSelected.emit(recipe);
  }

}
