import { motion } from "framer-motion";
import { useState } from "react";
import TabButtons from "./TabButtons";
const About = ({ selectedPage, setSelectedPage }) => {
  const [tab, setTab] = useState("Skills");
  const handleTabs = (currentTab) => {
    setTab(currentTab);
  };
  return (
    <section id="about relative ">
      <motion.div className="flex justify-center ">
        <div className="basis-3/4  flex flex-col items-center justify-center">
          <h1 className="text-4xl font-playfair font-bold">
            About <span className="text-purple-400">Me</span>
          </h1>
          <p className="text-center font-opensans text-lg font-medium md:absolute md:mt-48  md:w-1/2 w-full">
            I'm a Full Stack Developer with a passion for creating responsive
            and interactive Web application. I have experience working with{" "}
            <span>
              HTML5, CSS3, Javascript, React js, MongoDB, Node js, Express js,
              SQL, Bootstrap, Git and C++{" "}
            </span>
            I'm a quick learner and always excited to work with others to create
            an amazing app.
          </p>
          <div className="md:absolute md:mt-96 flex gap-4 md:text-base text-sm font-playfair">
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
        </div>
      </motion.div>
    </section>
  );
};

export default About;
