import { TEAM, LOCATION } from "../db/db.js";

import Header from "./Header.jsx";
import Intro from "./Intro.jsx";
import Presentation from "./Presentation.jsx";
import Location from "./Location.jsx";

function Home() {
  const boolean = false;
  const index = 0;

  return (
    <>
      <Intro />

      <Presentation
        title="Our team"
        description="Lorem ipsum dolor sit amet, consectetur."
        menu={boolean}
        meniuPhotos={TEAM}
        index={index}
      />

      <Presentation
        title="Our location"
        description="Lorem ipsum dolor sit amet, consectetur."
        menu={boolean}
        meniuPhotos={LOCATION}
        index={index}
      />
      
      <Location />
    </>
  );
}

export default Home;