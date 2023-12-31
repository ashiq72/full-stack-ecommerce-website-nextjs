"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Menu from "./Menu";

import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { BiSolidShoppingBags } from "react-icons/bi";
import Wrapper from "../../Wrapper";
import { MenuMobile } from "./MenuMobile";

function Navber({ categories }) {
  // const { cartItems } = useSelector((state) => state.cart);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState("");

  // Scroll behave start
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  //   const controlNavbar = () => {
  //     if (window.scrollY > 200) {
  //       if (window.scrollY > lastScrollY && !mobileMenu) {
  //         setShow("-translate-y-[80px]");
  //       } else {
  //         setShow("shadow-sm");
  //       }
  //     } else {
  //       setShow("translate-y-0");
  //     }
  //     setLastScrollY(window.scrollY);
  //   };

  //   useEffect(() => {
  //     window.addEventListener("scroll", controlNavbar);
  //     return () => {
  //       window.removeEventListener("scroll", controlNavbar);
  //     };
  //   }, [lastScrollY]);
  // Scroll behave end

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between  sticky top-0 shadow-sm transition-transform duration-300  ${show}`}
    >
      <Wrapper className="h-[60px] flex justify-between items-center">
        <Link href="/">
          <h1 className="text-black font-extrabold text-2xl flex items-center">
            <span className="text-[#F9C1CE] pr-1">
              <BiSolidShoppingBags />
            </span>
            <span className="text-[#F9C1CE]">Kawaii</span>
            sss
            <span className="text-yellow-700">.</span>
          </h1>
        </Link>

        <Menu
          showCatMenu={showCatMenu}
          setShowCatMenu={setShowCatMenu}
          categories={categories}
        />

        {mobileMenu && (
          <MenuMobile
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
            mobileMenu={mobileMenu}
            categories={categories}
          />
        )}

        <div className="flex items-center gap-2  text-black">
          {/* Icon start */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -z-10">
            <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />
          </div>
          {/* Icon end */}

          {/* Icon start */}
          <Link href="/cart">
            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -z-10">
              <BsCart className="text-[15px] md:text-[20px]" />

              <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                12
              </div>
            </div>
          </Link>
          {/* Icon end */}

          {/* Mobile icon start */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex lg:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer">
            {mobileMenu ? (
              <AiOutlineClose
                className="text-[22px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[30px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
          {/* Mobile icon end */}
        </div>
      </Wrapper>
    </header>
  );
}

export default Navber;
