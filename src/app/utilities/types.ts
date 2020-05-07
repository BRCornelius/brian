export interface IIngredient {
    quantity: string;
    item: string;
}

export interface IRecipeTime {
    cook: string;
    prep: string;
    total: string;
}

export interface IRecipe {
    INGREDIENTS: IIngredient[];
    INSTRUCTIONS: string[];
    PHOTO: string;
    TIME: IRecipeTime;
    NAME: string;
}

export interface INavLink {
    path: string;
    label: string;
}
 export interface ISecretResponse {
     SecretString: string;
 }