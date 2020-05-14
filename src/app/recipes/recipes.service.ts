import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[]= [
    {
      id:'r1',
      title: 'Rolex',
      imageUrl: 'https://www.flickr.com/photos/rachelstrohm/48851313596/sizes/q/',
      ingredients: ['Chapatti', 'Onions', 'Tomatoes', 'Carrots', 'Cabbages', 'Salt', 'Oil']
    },
    {
      id:'r2',
      title: 'Chicken Dumplings',
      imageUrl: 'https://www.flickr.com/photos/micromitra/8686652062/sizes/q/',
      ingredients: ['Flour', 'Chicken', 'Chicken Soup', '1tbs Sesame', 'Soy Sauce', 'Salt', 'Oil']
    }
  ]

  constructor() { }
  getAllRecipes(){
    return [...this.recipes]
  }

  getRecipe(recipeId: string){
    return {
      ...this.recipes.find(recipe => {
      return recipeId === recipeId
    })}
  }
  }

