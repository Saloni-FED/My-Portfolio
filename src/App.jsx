import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./components/Navbar";
import DotGroup from "./components/DotGroup";
import Landing from "./components/Landing";
import Line from "./components/Line";
import About from "./components/About";
function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  // console.log(isAboveMediumScreens);
  console.log(selectedPage);
  return (
    <div className="app bg-deep-blue">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <div className="w-5/6 md:w-full mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <Line />
      <div className="sm:w-5/6 md:w-full mx-auto md:h-full w-screen">
        <About selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      </div>
    </div>
  );
}

export default App;
