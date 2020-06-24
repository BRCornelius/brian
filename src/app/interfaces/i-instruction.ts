import { IDynamoDBEntry } from './i-dynamo-d-b-entry';

export interface IInstruction {
    M: {
        step: IDynamoDBEntry;
        instruction: IDynamoDBEntry;
    };
}
