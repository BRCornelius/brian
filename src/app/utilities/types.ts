export interface IInstruction {
    text: string;
    photo?: string;
}

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
    ingredients: IIngredient[];
    instructions: IInstruction[];
    photo: string;
    time: IRecipeTime;
    title: string;
}

export interface INavLink {
    path: string;
    label: string;
}
