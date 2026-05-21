import { FOOD } from "../db/db.js";
import About from "./About.jsx";
import FoodScroll from "./FoodScroll.jsx";

function Intro() {
  return (
    <div className="flex flex-col items-center justify-center text-center pt-32 pb-20 px-6" id="home">
      <About />
      <FoodScroll photos={FOOD} />
    </div>
  );
}

export default Intro;