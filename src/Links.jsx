import AnchorLink from "react-anchor-link-smooth-scroll";
const Links = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCase = page.toLowerCase();
  console.log(lowerCase)
  return (
    <AnchorLink
      className={`${
        selectedPage == lowerCase ? "text-purple-700" : "text-white"
      } hover:text-purple-700 transition duration-500  no-underline`}
      href={`#${lowerCase}`}
      onClick={() => setSelectedPage(lowerCase)}
    >
      {page}
    </AnchorLink>
  );
};

export default Links;
