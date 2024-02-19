import { motion } from "framer-motion";
import { useState } from "react";
import TabButtons from "./TabButtons";
import Skills from "../sections/Skills"; // Import the Skills component
import useMediaQuery from "../hooks/useMediaQuery";
import Education from "../sections/Education";
const About = ({ selectedPage, setSelectedPage }) => {
  const [tab, setTab] = useState("Skills");

  const handleTabs = (currentTab) => {
    setTab(currentTab);
  };

  return (
    <section id="about" className="w-full">
      <motion.div
        className="flex justify-center md:relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className=" flex flex-col items-center justify-center w-full md:absolute md:top-10 max-md:my-20">
          <h1 className="text-4xl font-playfair font-bold">
            About <span className="text-purple-400">Me</span>
          </h1>
          <p className="text-center font-opensans text-lg font-medium sm:w-1/2 ">
            I'm a Full Stack Developer with a passion for creating responsive
            and interactive Web applications. I have experience working with{" "}
            <span>
              HTML5, CSS3, JavaScript, React.js, MongoDB, Node.js, Express.js,
              SQL, Bootstrap, Git, and C++.
            </span>{" "}
            I'm a quick learner and always excited to work with others to create
            an amazing app.
          </p>
          <div className="flex gap-4 md:text-base text-sm font-playfair">
            <TabButtons
              active={tab === "Skills"}
              selectedTab={() => handleTabs("Skills")}
            >
              Skills
            </TabButtons>
            <TabButtons
              active={tab === "Education"}
              selectedTab={() => handleTabs("Education")}
            >
              Education
            </TabButtons>
          </div>
          {tab === "Skills" ?  <Skills /> : <Education/>}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
