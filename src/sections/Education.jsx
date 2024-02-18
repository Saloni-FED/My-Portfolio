import { motion } from "framer-motion";
const Education = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}
      className="font-opensans"
    >
      <ul>
        <li>Schooling :- St. Appollonias Convent English School</li>
        <li>HSC :- Mother Mary Junior College of Commerce and Science</li>
        <li>Pursuing B.E from SHREE L.R TIWARI COLLEGE OF ENGINEERING</li>
      </ul>
    </motion.div>
  );
};

export default Education;
