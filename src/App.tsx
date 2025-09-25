import { useState } from "react";
import dataset from "@/assets/data.json";
import { type Goal, type Meal, type FoodItem } from "@/types";
// import idly from "";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function App() {
  const [goal, setGoal] = useState<Goal | "">("");
  const [meal, setMeal] = useState<Meal | "">("");
  const [food_items, setFood_items] = useState<FoodItem[] | []>([]);

  // const [foodIndex, setFoodIndex] = useState<number>(0);

  // const items = goal && meal ? dataset[goal]?.[meal] ?? [] : [];

  return (
    <div className="flex mt-12 flex-col items-center justify-center">
      <h1 className="text-4xl font-semibold font-jetbrains text-wrap text-center wrap-break-word">
        Diet Planner
      </h1>
      <div className="space-y-4 mt-6 flex flex-col items-center ">
        <Select value={goal} onValueChange={(value) => setGoal(value as Goal)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Diet Goals" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="weight_loss">Weight Loss</SelectItem>
            <SelectItem value="muscle_gain">Muscle Gain</SelectItem>
            <SelectItem value="diabetes">Diabetes Diet</SelectItem>
          </SelectContent>
        </Select>

        {goal && (
          <Select
            value={meal}
            onValueChange={(value) => setMeal(value as Meal)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Meal Time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="breakfast">Breakfast</SelectItem>
              <SelectItem value="lunch">Lunch</SelectItem>
              <SelectItem value="dinner">Dinner</SelectItem>
            </SelectContent>
          </Select>
        )}

        <Button
          className="mt-3 "
          onClick={() => {
            const items = goal && meal ? dataset[goal]?.[meal] ?? [] : [];
            setFood_items(items);
          }}
        >
          Plan
        </Button>

        {food_items && (
          <div className="flex flex-col justify-center mx-auto text-center mt-8 gap-6">
            {food_items.map((food, index) => (
              <div
                key={index}
                className="border-2 rounded-2xl p-3 gap-3 w-9/10 mx-auto "
              >
                <p className="font-semibold text-lg font-jetbrains">
                  {food.food_name}
                </p>
                <img
                  src={
                    import.meta.env.PROD
                      ? `${import.meta.env.BASE_URL}${food.img.slice(1)}`
                      : food.img
                  }
                  alt={food.food_name}
                  className="mx-auto mt-2 rounded-lg w-8/10"
                />
                <p className="mt-2 w-9/10 mx-auto">{food.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
