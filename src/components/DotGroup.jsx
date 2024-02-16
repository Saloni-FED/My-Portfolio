import AnchorLink from "react-anchor-link-smooth-scroll";
const DotGroup = ({ selectedPage, setSelectedPage }) => {
  // console.log(selectedPage);
  const seletctedStyles = "relative bg-purple-700 w-4 h-4";
  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <AnchorLink
        className={`${
          selectedPage == "home" ? seletctedStyles : "bg-white"
        }  w-3 h-3 rounded-full`}
        href="#home"
      />
      <AnchorLink
        className={`${
          selectedPage == "about" ? seletctedStyles : "bg-white"
        }  w-3 h-3 rounded-full`}
        href="#about"
      />
      <AnchorLink
        className={`${
          selectedPage == "skill" ? seletctedStyles : "bg-white"
        }  w-3 h-3 rounded-full`}
        href="#skill"
      />
      <AnchorLink
        className={`${
          selectedPage == "projects" ? seletctedStyles : "bg-white"
        }  w-3 h-3 rounded-full`}
        href="#projects"
      />
      <AnchorLink
        className={`${
          selectedPage == "contact me" ? seletctedStyles : "bg-white"
        }  w-3 h-3 rounded-full`}
        href="#contact me"
      />
    </div>
  );
};

export default DotGroup;
