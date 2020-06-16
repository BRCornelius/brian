import { IDynamoDBEntry } from './i-dynamo-d-b-entry';

export interface IKidsVideo {
    TITLE: IDynamoDBEntry;
    THUMBNAIL: IDynamoDBEntry;
    URL: IDynamoDBEntry;
}
