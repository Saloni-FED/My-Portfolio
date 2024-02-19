import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = "bg-purple-700 w-4 h-4";
  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <AnchorLink
        className={`${
          selectedPage.toLowerCase() === "home" ? selectedStyles : "bg-white"
        } w-3 h-3 rounded-full cursor-pointer`}
        href="#home"
        onClick={() => setSelectedPage("home")}
      />
      <AnchorLink
        className={`${
          selectedPage.toLowerCase() === "about" ? selectedStyles : "bg-white"
        } w-3 h-3 rounded-full cursor-pointer`}
        href="#about"
        onClick={() => setSelectedPage("about")}
      />
      <AnchorLink
        className={`${
          selectedPage.toLowerCase() === "projects" ? selectedStyles : "bg-white"
        } w-3 h-3 rounded-full cursor-pointer`}
        href="#projects"
        onClick={() => setSelectedPage("projects")}
      />
      <AnchorLink
        className={`${
          selectedPage.toLowerCase() === "contact" ? selectedStyles : "bg-white"
        } w-3 h-3 rounded-full cursor-pointer`}
        href="#contact"
        onClick={() => setSelectedPage("contact")}
      />
    </div>
  );
};

export default DotGroup;
