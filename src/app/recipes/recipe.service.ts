import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class RecipeService {

	private recipes: Recipe[] = [
		new Recipe('Tacos de Suadero', 'Tacos de Suadero de primera en doble tortilla con complementos de cebolla, cilantro y limon. Te aconsejamos comerlo con la salsa de la Casa.', 'http://static.wixstatic.com/media/5e4d62_2a083813e92fae73b2b5c3ea6b03d256.png_1024', [
			new Ingredient('Carne de Suadero', 1),
			new Ingredient('Tortilla', 1)
			]),
		new Recipe('Flautas ahogadas en salsa verde', 'Flautas rellenas de pechuga de pollo deshebrada, bañadas en una salsa de tomate verde y servidas con crema y queso.', 'http://www.richlira.com/comidas/comida1.jpg', []),
		new Recipe('Enchiladas verdes', 'Enchiladas en Salsa Verde. Un delicioso desayuno o platillo principal, tortillas de maíz rellenas de pollo y bañadas en una salsa verde, crema y queso.', 'http://www.richlira.com/comidas/comida2.jpg', []),
];

  constructor() { }

  getRecipes(){
  	return this.recipes;
  }

}
