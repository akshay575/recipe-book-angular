import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Test Recipe Description', '/assets/img/recipe.jpg'),
    new Recipe('Another Test Recipe', 'Test Recipe Description', '/assets/img/recipe.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
