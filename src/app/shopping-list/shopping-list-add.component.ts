import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe';
import { Ingredient } from '../shared/ingredient';

@Component({
  selector: 'app-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
