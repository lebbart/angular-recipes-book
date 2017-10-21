import {Injectable} from '@angular/core';
import {Recipe} from '../recipe.model';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {RecipeService} from '../recipe.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RecipeDetailResolverService implements Resolve<Recipe> {
  constructor (private recipeService: RecipeService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe> | Promise<Recipe> | Recipe {
    return this.recipeService.getRecipe(+route.params['id']);
  }
}
