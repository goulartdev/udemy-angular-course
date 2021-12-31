import { Injectable } from '@angular/core';
import { Ingredient } from '@shared/models/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
  ingredientsAdded = new Subject<Ingredient[]>();
  #ingredients: Ingredient[] = [];

  constructor() {}

  getIngredients(): Ingredient[] {
    return [...this.#ingredients];
  }

  addIngredients(ingredient: Ingredient[]): void {
    this.#ingredients.push(...ingredient);
    this.ingredientsAdded.next(this.getIngredients());
  }
}
