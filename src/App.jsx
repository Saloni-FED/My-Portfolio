import React, { useEffect } from "react";
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

  useEffect(() => {
    // Apply overflow-x: hidden to body to prevent horizontal scrolling
    document.body.style.overflowX = "hidden";
    return () => {
      // Restore default overflow-x style when component unmounts
      document.body.style.overflowX = "auto";
    };
  }, []);

  return (
    <div className="bg-deep-blue w-full overflow-x-hidden">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <div className="w-full md:w-full mx-auto md:h-full mt-16">
        {/* Added top margin for the navbar */}
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <Line />
      <div className="sm:w-5/6 md:w-full mx-auto md:h-full w-screen mt-16 relative">
        {/* Added top margin for the navbar */}
        <About selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      </div>
      <Line />
      <div className="sm:w-fit md:w-fit mx-auto md:h-fit w-screen mt-16">
        {/* Added top margin for the navbar */}
        <Projects
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </div>
      <Line />
      <Line />
      <div className="w-full mx-auto md:h-full mt-16 flex justify-center">
        <Contact
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </div>
    </div>
  );
}

export default App;
