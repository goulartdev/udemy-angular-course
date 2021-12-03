import { Component, OnInit } from '@angular/core';
import { Ingredient } from '@shared/models/ingredient.model';

enum State {
  INSERT = 1,
  UPDATE = 2,
}

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss'],
})
export class ShoppingComponent implements OnInit {
  ingredients: Ingredient[] = [];
  selectedIngredient!: Ingredient;
  state!: State;

  constructor() {}

  ngOnInit(): void {
    this.new_ingredient();
  }

  new_ingredient(): void {
    this.selectedIngredient = {
      name: '',
      amount: 1,
    };
    this.state = State.INSERT;
  }

  save(): void {
    if (this.state === State.INSERT) {
      // this.
    }
  }

  select(ingredient: Ingredient) {
    this.selectedIngredient = ingredient;
    this.state = State.UPDATE;
  }

  delete(index: number): void {
    this.ingredients = this.ingredients.splice(index, 1);
  }

  clear(): void {
    this.ingredients = [];
  }
}
