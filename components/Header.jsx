import { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Menu from "./Menu";

import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import MenuMobile from "./MenuMobile";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  console.log("last:", lastScrollY);
  console.log("window:", window.scrollY);

  const controlNavber = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavber);
    return () => {
      window.removeEventListener("scroll", controlNavber);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className="h-[60px]  flex justify-between items-center">
        <Link href="/">
          <img src="/logo.svg" alt="" className="w-[40px] md:w-[60px]" />
        </Link>
        <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />
        {mobileMenu && (
          <MenuMobile
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
          />
        )}
        <div className="flex items-center gap-2 text-black">
          {/* Icon Start  */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full relative text-lg hover:bg-black/[0.06] flex justify-center items-center transition-all cursor-pointer">
            <IoMdHeartEmpty className="text-[22px]" />
            <div className="absolute text-sm bg-red-400 w-5 h-5 rounded-full flex justify-center  text-white font-bold top-0 right-0">
              51
            </div>
          </div>
          {/* Icon End  */}
          {/* Icon Start  */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full relative text-lg hover:bg-black/[0.06] flex justify-center items-center  transition-all cursor-pointer">
            <BsCart />
            <div className="absolute text-sm bg-red-400 w-5 h-5 rounded-full flex justify-center  text-white font-bold top-0 right-0">
              5
            </div>
          </div>
          {/* Icon End  */}

          {/* Mobile Icon start */}
          <div className="w-7 md:w-10 h-7 md:h-10 flex justify-center items-center  hover:bg-black/[0.04] relative md:hidden cursor-pointer -mr-2">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[24px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[26px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
          {/* Mobile Icon End */}
        </div>
      </Wrapper>
    </div>
  );
};

export default Header;
