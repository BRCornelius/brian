import { IDynamoDBEntry } from './i-dynamo-d-b-entry';

export interface IRecipeToTry {
    title: IDynamoDBEntry;
    url: IDynamoDBEntry;
}
