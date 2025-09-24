import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import dataset from "@/assets/data.json";

function App() {
  const [goal, setGoal] = useState("");
  const [meal, setMeal] = useState("");
  // const [data, setData] = useState(dataset);
  // console.log(data);
  // const handleValueChange = (value: string) => {
  //   setGoal(value);
  //   console.log("Selected fruit:", value);
  // };
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      {/* <div className="text-3xl"> Fire </div> */}

      <>
        <div className=" space-y-4 mt-6">
          <Select value={goal} onValueChange={setGoal}>
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
            <Select value={meal} onValueChange={setMeal}>
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
        </div>
        <Button className="mt-4">Plan</Button>

        {JSON.stringify(dataset.goals?.[goal]?.[meal])}
      </>
      <h1 className=" text-3xl">{goal}</h1>
      <h1 className=" text-3xl">{meal}</h1>
    </div>
  );
}

export default App;
