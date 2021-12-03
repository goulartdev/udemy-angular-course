import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '@shared/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    {
      name: 'Teste 1',
      description: 'Some recipe 1',
      imageUrl:
        'https://img.cybercook.com.br/imagens/receitas/644/strogonoff-de-frango-1-840x480.jpg?q=75',
    },
    {
      name: 'Teste 2',
      description: 'Some recipe 2',
      imageUrl:
        'https://img.cybercook.com.br/imagens/receitas/644/strogonoff-de-frango-1-840x480.jpg?q=75',
    },
    {
      name: 'Teste 3',
      description: 'Some recipe 3',
      imageUrl:
        'https://img.cybercook.com.br/imagens/receitas/644/strogonoff-de-frango-1-840x480.jpg?q=75',
    },
  ];

  @Output() onSelectRecipe = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit(): void {}

  selectRecipe(recipe: Recipe) {
    this.onSelectRecipe.emit(recipe);
  }
}
