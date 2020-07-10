import { IDynamoDBEntry } from './i-dynamo-d-b-entry';
import { IInstruction } from './i-instruction';
import { IRecipeTime } from './i-recipe-time';
import { IIngredient } from './i-ingredient';

export interface IRecipe {
    ingredients: IIngredient[];
    instructions: IInstruction[];
    photo: IDynamoDBEntry;
    times: IRecipeTime;
    name: IDynamoDBEntry;
}
