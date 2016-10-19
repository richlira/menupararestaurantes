import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe';
import { Ingredient } from '../shared/ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
	items: Ingredient[] = [] ;

  constructor() { }

  ngOnInit() {
  }

}
