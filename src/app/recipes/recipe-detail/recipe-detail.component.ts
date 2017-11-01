import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Data, Router, Params} from '@angular/router';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
      }
    );

    this.route.data.subscribe(
      (data: Data) => {
        this.recipe = data['recipe'];
        if (this.recipe === undefined) {
          this.router.navigate(['/not-found']);
        }
      }
    );
  }

  onSentToShoppingList() {
    this.recipeService.setIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onRemoveRecipe() {
    this.recipeService.removeIngredient(this.id);
    this.router.navigate(['recipes']);
  }
}
