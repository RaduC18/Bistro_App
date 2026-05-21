import { useState } from "react";
import Presentation from "./Presentation.jsx";
import MenuButtons from "./MenuButtons.jsx";
import { MENU } from "../db/db.js";

function MenuDisplay() {
  const [index, setIndex] = useState(0);

  function handleNext() {
    setIndex((prev) => Math.min(MENU.length - 1, prev + 1));
  }

  function handlePrev() {
    setIndex((prev) => Math.max(0, prev - 1));
  }

  return (
    <>
      <Presentation 
        menu={true} 
        meniuPhotos={MENU} 
        index={index} 
      />
      <MenuButtons 
        index={index} 
        total={MENU.length} 
        onLeft={handlePrev} 
        onRight={handleNext} 
      />
    </>
  );
}

export default MenuDisplay;