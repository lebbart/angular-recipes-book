import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {ShoppingListService} from "../shopping-list.service";
import {Ingredient} from "../../shared/ingredient.model";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs/Rx";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.subscription = this.shoppingListService.startEditing
      .subscribe(
        (index: number) => {
          this.editItemIndex = index;
          this.editMode = true;
          this.editedItem = this.shoppingListService.getIngredient(index);
          this.slForm.setValue({
            'name': this.editedItem.name,
            'amount': this.editedItem.amount
          });
        }
      );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);

    if (this.editMode) {
      this.shoppingListService.updateIngrediet(this.editItemIndex, newIngredient);
    } else {
      this.shoppingListService.addNewIngredient(newIngredient);
    }

    this.editMode = false;
    form.reset();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onRemoveClick() {
    this.shoppingListService.removeIngredient(this.editItemIndex);
    this.clearFields();
  }

  clearFields() {
    this.slForm.reset();
    this.editMode = false;
  }
}
