interface IDynamoDBEntry {
    N?: number;
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
export interface IInstruction {
    M: {
        step: IDynamoDBEntry;
        instruction: IDynamoDBEntry;
    }
}
export interface IRecipe {
    INGREDIENTS: IIngredient[];
    INSTRUCTIONS: IInstruction[];
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
     THUMBNAIL: IDynamoDBEntry;
     URL: IDynamoDBEntry;
}
export interface IFormattedKidsVideo {
    title: string;
    thumbnail: string;
    url: string;
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
 export interface IDropdownOption {
     title: string;
     value: number;
     image?: string;
 }
export interface IURL {
    URL?: string;
    thumbnailURL?: string;
}
export interface ILegoSet {
    name: string;
    setID: number;
    image: IURL;
}