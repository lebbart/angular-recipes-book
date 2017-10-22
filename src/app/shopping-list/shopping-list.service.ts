import {Ingredient} from '../shared/ingredient.model';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Brocolli', 10),
    new Ingredient('Saussages', 100),
    new Ingredient('Carrot', 5),
    new Ingredient('Basilic', 3),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addNewIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredientsFromRecipeDetail(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
