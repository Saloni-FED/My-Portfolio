import { motion } from "framer-motion";
import { useState } from "react";
import image_1 from "../assets/images/image_1.png";
import image_2 from "../assets/images/image_2.png";
import image_3 from "../assets/images/image_3.png";
import image_4 from "../assets/images/image_4.png";
import image_5 from "../assets/images/image_5.png";
import { description } from "../constant/descriptions";
const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const handleIndexExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? "-1" : index);
  };
  const variants = {
    expanded: {
      width: "150%", 
    },
    collapsed: {
      width: "75%", 
    },
  };
  const cardImage = [image_1, image_2, image_3, image_4, image_5];

  return (
    <section id="projects">
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="sm:basis-3/4 flex flex-col items-center justify-center w-full">
          <h1 className="text-4xl font-playfair font-bold">
            My <span className="text-purple-400">Projects</span>
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
          {[0, 1, 2, 3, 4].map((index) => (
            <motion.div
              key={index}
              className={`cursor-pointer h-52  bg-cover bg-center  rounded-md ${
                index === expandedIndex ? "expanded" : ""
              }`}
              variants={variants}
              initial="collapsed"
              animate={index === expandedIndex ? "expanded" : "collapsed"}
              transition={{ duration: 0.5 }}
              onClick={() => {
                handleIndexExpand(index);
              }}
              style={{ backgroundImage: `url(${cardImage[index]})` }}
            ></motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
