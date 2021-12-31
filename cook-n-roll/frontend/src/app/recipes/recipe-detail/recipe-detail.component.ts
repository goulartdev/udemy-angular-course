import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '@shared/models/recipe.model';
import { Subscription } from 'rxjs';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  subscription: Subscription | null = null;
  @Input() recipe!: Recipe;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params) => {
      this.recipe = this.recipeService.getRecipe(params['slug']);
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
