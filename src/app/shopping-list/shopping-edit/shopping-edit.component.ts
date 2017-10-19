import {Component, OnInit} from '@angular/core';
import {ShoppingListService} from "../shopping-list.service";
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  constructor(private shoppingListService: ShoppingListService) { }

  onAddClick(name, amount) {
    const newIngredient = new Ingredient(name.value, amount.value);
    this.shoppingListService.addNewIngredient(newIngredient);
    this.clearFields(name, amount);
  }

  onRemoveClick() {
    console.log('remove clicked');
  }

  clearFields(name, amount) {
    name.value = '';
    amount.value = '';
  }
}
