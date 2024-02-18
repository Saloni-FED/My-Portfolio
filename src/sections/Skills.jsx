import { motion } from "framer-motion";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap, FaNodeJs } from "react-icons/fa";
import { DiMongodb,  DiMysql } from "react-icons/di";
import { SiExpress } from "react-icons/si";
const Skills = () => {
  return (
    <section className="">
      <motion.div
        className="text-4xl font-bold grid sm:grid-cols-3 gap-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <FaHtml5 className=" text-red-700" />
        <FaCss3Alt className="text-blue-700"/>
        <IoLogoJavascript className="text-yellow-500"/>
        <RiReactjsLine className="text-blue-500"/>
        <SiTailwindcss className='text-blue-600'/>
        <FaBootstrap className="text-purple-500"/>
        <DiMongodb className='text-green-400'/>
        <FaNodeJs className="text-green-500"/>
        <SiExpress />
        <DiMysql className="text-blue-400"/>
      </motion.div>
    </section>
  );
};

export default Skills;
