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
      imageUrl: 'https://www.independent.co.ug/wp-content/uploads/2016/06/rola.jpg',
      ingredients: ['Chapatti', 'Onions', 'Tomatoes', 'Carrots', 'Cabbages', 'Salt', 'Oil']
    },
    {
      id:'r2',
      title: 'Chicken Dumplings',
      imageUrl:'https://gfscdn.azureedge.net/images/Product/medium/steamed-chicken-dumplings-recipe-1S-12773.jpg',
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

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipeId !== recipeId
    })

  }
  }

