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
