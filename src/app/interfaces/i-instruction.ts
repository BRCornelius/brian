import { IDynamoDBEntry } from './i-dynamo-d-b-entry';

export interface IInstruction {
    step: IDynamoDBEntry;
    instruction: IDynamoDBEntry;
}
