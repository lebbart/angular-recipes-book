import {Component, OnInit, Input} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {

  }

  onSentToShoppingList() {
    this.recipeService.setIngredientsToShoppingList(this.recipe.ingredients);
  }

  onRemoveItem() {
    alert('Remove One Item');
  }
}
