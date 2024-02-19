import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./components/Navbar";
import DotGroup from "./components/DotGroup";
import Landing from "./components/Landing";
import Line from "./components/Line";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  
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
      <div className="sm:w-5/6 md:w-full mx-auto md:h-full w-screen mt-2 relative">
        <About selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      </div>
      <Line />
      <div className="sm:w-fit md:w-fit mx-auto md:h-fit w-screen">
        <Projects
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </div>
      <Line />
      <Line/>
      <div className="sm:w-5/6 md:w-full mx-auto md:h-full w-screen mt-2 relative">
        <Contact
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </div>
    </div>
  );
}

export default App;
