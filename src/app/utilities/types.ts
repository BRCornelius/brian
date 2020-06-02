interface IDynamoDBEntry {
    S?: string;
    SS?: string[];
    L?: any[];
}
export interface IIngredient {
    quantity: IDynamoDBEntry;
    item: IDynamoDBEntry;
}
export interface IRecipeTime {
    cook: IDynamoDBEntry;
    prep: IDynamoDBEntry;
    total: IDynamoDBEntry;
}
export interface IRecipe {
    INGREDIENTS: IIngredient[];
    INSTRUCTIONS: IDynamoDBEntry;
    PHOTO: IDynamoDBEntry;
    TIME: IRecipeTime;
    NAME: IDynamoDBEntry;
}
export interface INavLink {
    path: string;
    label: string;
}
export interface ISecretResponse {
     SecretString: string;
}
export interface IKidsVideo {
     TITLE: IDynamoDBEntry;
     URL: IDynamoDBEntry;
}
export interface IOTFVideo {
    TITLE: IDynamoDBEntry;
    CAT: IDynamoDBEntry;
    GRP: IDynamoDBEntry;
}
export interface ICredential {
    name: string;
    password: string;
}
 export interface IFormattedOTFVideo {
     category: string;
     group: string;
     title: string;
 }
 export interface IFacet {
     [key: string]: string;
 }

 export interface IOptions {
     title: string;
     options: string[];
 }