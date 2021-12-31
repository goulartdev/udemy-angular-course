import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '@shared/models/recipe.model';
import { Subscription } from 'rxjs';
import { RecipeService } from './services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe | null = null;

  constructor() {}

  ngOnInit(): void {

  }
}
