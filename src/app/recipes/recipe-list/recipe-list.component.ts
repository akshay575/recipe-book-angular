import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Test Recipe Description', '/assets/img/recipe.jpg'),
    new Recipe('Another Test Recipe', 'Test Recipe Description', '/assets/img/recipe.jpg')
  ]
  @Output() selectedRecipeDetail = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.selectedRecipeDetail.emit(recipe);
  }

}
