import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '@shared/models/recipe.model';
import { Subscription } from 'rxjs';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss'],
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  subscription: Subscription | null = null;
  repice: Recipe = {
    name: '',
    slug: '',
    description: '',
    imageUrl: '',
  };

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params) => {
      if (params['slug']) {
        this.repice = this.recipeService.getRecipe(params['slug']);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe;
  }
}
