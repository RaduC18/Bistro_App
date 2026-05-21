import { TEAM, LOCATION } from "../db/db.js";

import useScroll from "../useScroll.js";
import Header from "./Header.jsx";
import Intro from "./Intro.jsx";
import Presentation from "./Presentation.jsx";
import Location from "./Location.jsx";

function Home() {
  useScroll("location");
  useScroll("home");
  const boolean = false;
  const index = 0;

  return (
    <>
      <Intro />

      <Presentation
        title="Our team"
        description="Lorem ipsum dolor sit amet, consectetur."
        menu={boolean}
        photo={TEAM}
        index={index}
      />

      <Presentation
        title="Our location"
        description="Lorem ipsum dolor sit amet, consectetur."
        menu={boolean}
        photo={LOCATION}
        index={index}
      />
      
      <Location />
    </>
  );
}

export default Home;