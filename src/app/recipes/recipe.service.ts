import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Test Recipe',
    'Test Recipe Description',
    '/assets/img/recipe.jpg',
  [
    new Ingredient('Bread', 2),
    new Ingredient('Butter', 1)
  ]),
    new Recipe('Another Test Recipe',
    'Test Recipe Description',
    '/assets/img/recipe.jpg',
  [
    new Ingredient('Bread', 2),
    new Ingredient('Tomato', 1)
  ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
