export type FoodItem = {
    food_name: string
    img: string
    description: string
    youtube?: string
}

export type Meal = "breakfast" | "lunch" | "dinner"
export type Goal = "weight_loss" | "muscle_gain" | "diabetes"

export type Meals = {
    [key in Meal]?: FoodItem[]
}

export type Dataset = {
    [key in Goal]?: Meals
}


// types/hotel.ts
export interface Hotel {
    id: number;
    name: string;
    location: string;
    price: number;
}

export interface PaginatedResponse<T> {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
}
