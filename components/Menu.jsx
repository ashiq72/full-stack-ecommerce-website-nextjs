import Link from "next/link";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
  { id: 1, name: "Jordan", doc_count: 11 },
  { id: 2, name: "Sneakers", doc_count: 8 },
  { id: 3, name: "Running shoes", doc_count: 64 },
  { id: 4, name: "Football shoes", doc_count: 107 },
];

const Menu = ({ setShowCatMenu, showCatMenu }) => {
  return (
    <ul className="hidden md:flex items-center gap-8 font-medium text-black">
      {data.map((item) => (
        <div key={item.id}>
          {item?.subMenu ? (
            <li
              className="cursor-pointer relative flex items-center gap-2"
              onMouseEnter={() => setShowCatMenu(true)}
              onMouseLeave={() => setShowCatMenu(false)}
            >
              {item.name} <BsChevronDown size={14} />
              {showCatMenu && (
                <ul className="absolute left-0 top-6 bg-white min-w-[250px] px-1 py-1 text-black shadow-lg">
                  {subMenuData.map((submenu) => (
                    <Link
                      key={submenu.id}
                      href="/"
                      onClick={() => setShowCatMenu(false)}
                    >
                      <li className="h-12 flex items-center justify-between px-3 hover:bg-black/[0.03] rounded-md">
                        {submenu.name}
                        <span className="opacity-50 text-sm">68</span>
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </li>
          ) : (
            <li className="cursor-pointer">{item.name}</li>
          )}
        </div>
      ))}
    </ul>
  );
};

export default Menu;
