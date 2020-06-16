import { IDynamoDBEntry } from './i-dynamo-d-b-entry';

export interface IIngredient {
    quantity: IDynamoDBEntry;
    item: IDynamoDBEntry;
}
