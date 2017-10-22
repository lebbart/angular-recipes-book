import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {RecipeService} from '../recipe.service';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipe: Recipe;
  id: number;
  editMode = false;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;

        if (this.editMode) {
          this.recipe = this.recipeService.getRecipe(this.id);
        } else {
          this.recipe = {
            name: '',
            imagePath: '',
            description: '',
            ingredients: [
              {name: '', amount: 0}
            ]
          };
        }
      }
    );
  }

  onAddEditClick() {

  }
}
