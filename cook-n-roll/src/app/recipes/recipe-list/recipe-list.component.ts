import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    {
      name: 'Teste 1',
      description: 'Some recipe',
      imageUrl:
        'https://img.cybercook.com.br/imagens/receitas/644/strogonoff-de-frango-1-840x480.jpg?q=75',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
