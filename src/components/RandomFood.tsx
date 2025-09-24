import dataset from "@/assets/data.json";
import { Dataset, type Goal, type Meal } from "@/types";
import idly from "@/assets/img/idly.webp"; // fallback for local images

export default function RandomFood({ goal, meal }: { goal: Goal; meal: Meal }) {
  const items = dataset[goal]?.[meal] ?? [];

  if (items.length === 0) return <p>No food items available</p>;

  // pick a random index
  const randomIndex = Math.floor(Math.random() * items.length);
  const item = items[randomIndex];

  return (
    <div className="flex flex-col justify-center mx-auto text-center mt-8">
      <p className="font-semibold text-lg">{item.food_name}</p>
      <img
        src={item.img === "@/img/idly.webp" ? idly : item.img}
        alt={item.food_name}
        className="mx-auto mt-2 rounded-lg max-w-[200px]"
      />
      <p className="mt-1">{item.description}</p>
    </div>
  );
}
