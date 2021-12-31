import { Injectable } from '@angular/core';
import { Ingredient } from '@shared/models/ingredient.model';
import { Recipe } from '@shared/models/recipe.model';
import { Subject } from 'rxjs';
import { ShoppingListService } from 'src/app/shopping-list/services/shopping-list.service';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  #recipes: Recipe[] = [
    {
      name: 'Teste 1',
      slug: 'teste-1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      imageUrl:
        'https://img.cybercook.com.br/imagens/receitas/644/strogonoff-de-frango-1-840x480.jpg?q=75',
    },
    {
      name: 'Teste 2',
      slug: 'teste-2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      imageUrl:
        'https://img.cybercook.com.br/imagens/receitas/644/strogonoff-de-frango-1-840x480.jpg?q=75',
    },
    {
      name: 'Teste 3',
      slug: 'teste-3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      imageUrl:
        'https://img.cybercook.com.br/imagens/receitas/644/strogonoff-de-frango-1-840x480.jpg?q=75',
    },
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes(): Recipe[] {
    return [...this.#recipes];
  }

  getRecipe(slug: string): Recipe {
    const recipe = this.#recipes.find((recipe) => recipe.slug === slug);

    if (!recipe) {
      throw Error(`Recipe ${slug} not found`);
    }

    return recipe;
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.shoppingListService.addIngredients(ingredients);
  }
}
