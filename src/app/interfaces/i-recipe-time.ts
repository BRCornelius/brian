import { IDynamoDBEntry } from './i-dynamo-d-b-entry';

export interface IRecipeTime {
    cook: IDynamoDBEntry;
    prep: IDynamoDBEntry;
    total: IDynamoDBEntry;
}
