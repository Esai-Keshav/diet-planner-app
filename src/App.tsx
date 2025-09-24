import { useState } from "react";
import dataset from "@/assets/data.json";
import { type Goal, type Meal } from "@/types";
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
  const [foodIndex, setFoodIndex] = useState<number>(0);

  const items = goal && meal ? dataset[goal]?.[meal] ?? [] : [];

  const handlePlanClick = () => {
    if (items.length > 0) {
      setFoodIndex(Math.floor(Math.random() * items.length));
    }
  };

  const randomFood = items[foodIndex];

  return (
    <div className="flex mt-16 flex-col items-center justify-center">
      <h1 className="text-4xl font-semibold">Diet Planner App </h1>
      <div className="space-y-4 mt-6 flex flex-col items-center">
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

        <Button className="mt-4" onClick={handlePlanClick}>
          Next
        </Button>

        {randomFood && (
          <div className="flex flex-col justify-center mx-auto text-center mt-8  border-2 rounded-2xl p-3 gap-3 w-9/10">
            <p className="font-semibold text-lg">{randomFood.food_name}</p>
            <img
              src={`${import.meta.env.BASE_URL}${randomFood.img.slice(1)}`}
              alt={randomFood.food_name}
              className="mx-auto mt-2 rounded-lg max-w-[200px]"
            />
            <p className="mt-1 w-9/10 mx-auto">{randomFood.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
