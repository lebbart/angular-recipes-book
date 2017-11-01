import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import {Subject} from "rxjs/Rx";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'McDonalds Burger',
      'Here could be a lot of text but not now!',
      'http://www.tellusaboutus.com/comments/images/BK-WebComment/BB_WHOPPER-v1.png',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Salad', 3),
        new Ingredient('Cheese', 1),
        new Ingredient('Buns', 2)
      ]
    ),
    new Recipe(
      'Burger King Sandwich',
      'Yammy!',
      'https://i.ytimg.com/vi/FfWVPcFTp6I/maxresdefault.jpg',
      [
        new Ingredient('Meat', 2),
        new Ingredient('Salad', 5),
        new Ingredient('Tomatos', 3),
        new Ingredient('Cheese', 2),
        new Ingredient('Buns', 2)
      ]
    ),
    new Recipe(
      'Burger King Coke and french fries!',
      'More than you expect!',
      'https://i.pinimg.com/736x/df/6e/99/df6e9993aa28d66003360a46e9ae7260--recipes-for-meatloaf-recipes-for-chicken.jpg',
      [
        new Ingredient('Water', 0.5),
        new Ingredient('Ice', 12)
      ]
    )
  ];

  constructor (private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  setIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredientsFromRecipeDetail(ingredients);
  }

  addNewRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  removeIngredient(id: number) {
    this.recipes.splice(id, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
