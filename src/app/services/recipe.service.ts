import { Injectable } from '@angular/core';
import { IRecipe } from '../utilities/types';

import * as AWS from 'aws-sdk';

const params = {
  TableName: 'RECIPES_BRIAN',
};
const ddb = new AWS.DynamoDB();
@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  getRecipes = () => {
    ddb.scan(params, (err, data) => {
      if(err){
        console.log("Error", err)
        return err
      } else {
        return data.Items
      }
    })
  };

  recipes: IRecipe[] = [{
    ingredients: [{
      quantity: '4-tbsp',
      item: 'Minced garlic',
    }, {
      quantity: '2.5-lbs.',
      item: 'Fresh salmon',
    }, {
      quantity: '1 large',
      item: 'Creole tomato',
    }, {
      quantity: '4-ounces',
      item: 'Feta cheese',
    }, {
      quantity: '1-pound',
      item: 'Fresh spinach',
    }, {
      quantity: '3-tbsp',
      item: 'Olive oil',
    }],
    instructions: [{
      text: 'Preheat oven to 400˚.',
    },
    {
      text: 'Dice the tomatoes.',
    },
    {
      text: 'Sautee spinach in a large pot with 1-tbsp olive oil, 1-tbsp of garlic over medium heat, and a pinch of salt and pepper.  For added deliciousness, add cooked bacon bits.',
    },
    {
      text: 'In a small bowl, mix 3-tbsp garlic with 1-tbsp olive oil and a pinch of salt and pepper.',
    },
    {
      text: 'Line a shallow baking pan with tin foil and coat with olive oil.  Then, place on the salmon.',
    },
    {
      text: 'Cut 1/4-inch slits all along the salmon.'
    },
    {
      text: 'Rub the oil and garlic mixture all over the salmon; making sure to fill as many of the slits with garlic chunks as possible.'
    },
    {
      text: 'Cover the salmon with the sauteed spinach.  Top with diced tomatoes and feta cheese.'
    },
    {
      text: 'Bake for 21-minutes.',
    },
    {
      text: 'Let stand for 2 minutes before cutting and serving.'
    }],
    photo: 'https://img.taste.com.au/IECdj41V/w720-h480-cfill-q80/taste/2016/11/baked-maple-glazed-salmon-with-wilted-spinach-30520-1.jpeg',
    time: {
      cook: '21-min.',
      prep: '15-min',
      total: '36-min',
    },
    title: 'Baked Salmon with Spinach',
  }, {
    title: 'Kare-kare',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Kare-kare_oxtail_stew_1.jpg/2560px-Kare-kare_oxtail_stew_1.jpg',
    time: { cook: '2.5-hours', prep: '15-min', total: '2.75-hours'},
    ingredients: [{
      quantity: '2-lbs',
      item: 'oxtail'
    }, {
      quantity: '3-cups',
      item: 'Beef broth'
    }, {
      quantity: '0.5-lbs',
      item: 'Bok choy'
    }, {
      quantity: '0.5-lbs',
      item: 'Zucchini'
    }, {
      quantity: '3-tbsp',
      item: 'Minced garlic'
    }, {
      quantity: '2-cups',
      item: 'Water'
    },],
    instructions: [],
  }];
}
