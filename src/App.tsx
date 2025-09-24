import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("");
  const [meal, setMeal] = useState("");
  // const handleValueChange = (value: string) => {
  //   setTheme(value);
  //   console.log("Selected fruit:", value);
  // };
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="text-3xl"> Fire </div>
      <Button>Click me</Button>

      <>
        <div className="flex gap-3 mt-6">
          <Select value={theme} onValueChange={setTheme}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Diet Goals" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Weight Loss">Weight Loss</SelectItem>
              <SelectItem value="Muscle Gain">Muscle Gain</SelectItem>
              <SelectItem value="Diabetes Diet">Diabetes Diet</SelectItem>
            </SelectContent>
          </Select>
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
        </div>
      </>
      <h1 className="text-white text-3xl">{theme}</h1>
    </div>
  );
}

export default App;
