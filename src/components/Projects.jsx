import { motion } from "framer-motion";
import image_1 from "../assets/images/image_1.png";
import image_2 from "../assets/images/image_2.png";
import image_3 from "../assets/images/image_3.png";
import image_4 from "../assets/images/image_4.png";
import image_5 from "../assets/images/image_5.png";
import { URL } from "../constant/descriptions";
const Projects = () => {
  const cardImage = [image_1, image_2, image_3, image_4, image_5];

  return (
    <section id="projects" className="pt-32">
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="sm:basis-3/4 flex flex-col items-center justify-center w-full">
          <h1 className="text-4xl font-playfair font-bold">
            My <span className="text-purple-400">Projects</span>
          </h1>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {cardImage.map((item, i) => {
            return (
              <motion.div
                key={i}
                className="relative cursor-pointer"
                whileHover={{ opacity: 0.5 }}
                initial={{ opacity: 0, x: 50, y: -50 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <img
                  src={item}
                  alt="projects"
                  className="w-60 h-52 rounded-md"
                />
                <motion.div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300" />
                <a
                  href={URL[i]}
                  className="absolute inset-0 flex items-center justify-center text-purple-700 no-underline text-2xl font-opensans font-bold opacity-0 hover:opacity-100 transition-opacity duration-300"
                >
                  Live Link
                </a>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
