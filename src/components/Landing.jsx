import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import Image from "../assets/me_sallo.jpg";
import Social from "./Social";
const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16  md:pt-48 pt-20"
    >
      <div className="flex flex-col-reverse md:flex-row justify-center gap-10 items-center z-10  mx-auto">
        <div className="z-30 flex flex-col  border-4 border-purple-700 md:border-0 md:border-none basis-2/5 md:w-auto md:mr-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="relative"
          >
            <p className="text-4xl font-playfair font-bold text-center md:text-start">
              Saloni{" "}
              <span className="xs:relative xs:text-purple-700 xs:font-semibold z-20 text-purple-700 ">
                Pandey
              </span>
            </p>
            <p className="text-xl font-opensans text-center md:text-start">
              I'm a Saloni Pandey with a passion for Web Development. From
              crafting elegant code to designing captivating user experiences, I
              love turning ideas into reality.
            </p>
          </motion.div>
          <motion.div
            className="flex mt-5 justify-center md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <AnchorLink
              className="px-4 rounded font-opensans text-xl text-purple-700 hover:bg-purple-700 hover:text-white py-2 no-underline bg-purple-200 transition duration-500"
              onClick={() => setSelectedPage("contact")}
              href="#contact"
            >
              Contact Me
            </AnchorLink>

            <div className="rounded font-opensans text-xl text-purple-700 hover:bg-purple-700 hover:text-white  no-underline bg-purple-200 transition duration-500 cursor-pointer ml-3 py-2 px-4">
              Resume
            </div>
          </motion.div>
          <motion.div
            className="flex mt-5 justify-center md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Social />
          </motion.div>
        </div>
        {isAboveMediumScreens ? (
          <motion.div className="relative border-2 border-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}>
            <div className="absolute bottom-10 right-10 w-full max-w-[400px] md:max-w-[600px] h-full border-4  rounded bg-purple-400 z-[-1]" />
            <img
              src={Image}
              alt="profile"
              width="300"
              height="300"
              className="z-10 w-full max-w-[400px] md:max-w-[600px]"
            />
          </motion.div>
        ) : (
          <motion.div  initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}>
            <img
              src={Image}
              alt="profile"
              width="300"
              height="300"
              className="z-10 w-full max-w-[400px] md:max-w-[600px]"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Landing;
