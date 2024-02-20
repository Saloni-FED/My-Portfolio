import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
const Social = () => {
  return (
    <div className="flex justify-center md:justify-start mt-3 gap-7 text-white no-underline text-2xl" >
      <a
        className=" text-white hover:text-purple-700 transition duration-500 "
        href='https://www.linkedin.com/in/saloni-pandey-454671210/'
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        className="text-white hover:text-purple-700 transition duration-500"
        href="https://github.com/Saloni-FED"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a
        className="text-white hover:text-purple-700 transition duration-500"
        href="https://www.instagram.com/salonipandey66/?next=%2F"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillInstagram />
      </a>
    </div>
  )
}

export default Social
