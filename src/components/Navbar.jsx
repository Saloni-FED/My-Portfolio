import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import Links from "../Links";
import { CiMenuBurger } from "react-icons/ci";
import { MdCancel } from "react-icons/md";
const Navbar = ({ setSelectedPage, selectedPage }) => {
  // console.log(selectedPage)
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  return (
    <nav className={`z-40 w-full fixed top-0 py-3`}>
      <div className="w-3/4  mx-auto flex justify-between">
        <h3 className="text-3xl font-extrabold font-playfair text-purple-700">
          SaFED
        </h3>
        {isAboveSmallScreens ? (
          <div className=" text-sm font-extrabold font-opensans flex justify-center items-center gap-6">
            <Links
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Links
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />

            <Links
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Links
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <div className="flex justify-center items-center text-3xl font-semibold  transition duration-300">
            {isMenuToggled ? (
              <div className="fixed right-0 bottom-0 h-full w-full bg-black ">
                <MdCancel
                  onClick={() => {
                    setIsMenuToggled((prev) => !prev);
                  }}
                  className="text-white"
                />
                <div className="flex flex-col gap-9 ml-[33%] text-2xl text-black">
                  <Links
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    setIsMenuToggled ={setIsMenuToggled }
                  />
                  <Links
                    page="About"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    setIsMenuToggled ={setIsMenuToggled }
                  />
                  <Links
                    page="Projects"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    setIsMenuToggled ={setIsMenuToggled }
                  />
                  <Links
                    page="Contact"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    setIsMenuToggled ={setIsMenuToggled }
                  />
                </div>
              </div>
            ) : (
              <CiMenuBurger
                onClick={() => {
                  setIsMenuToggled((prev) => !prev);
                }}
                className="text-purple-700"
              />
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
