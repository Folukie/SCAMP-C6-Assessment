import React, { useState } from "react";
import { BsCart3, BsPersonCircle } from "react-icons/bs";
import Sidebar from "./sidebar.component";
import { Squash as Hamburger } from "hamburger-react";

const Header = ({ cart }) => {
  const items = ["collections", "men", "women", "about", "contact"];
  const [isOpen, setOpen] = useState(false);
  return (
    <nav className="flex justify-between py-10 items-center border-b sm:py-6">
      <div className="flex items-center gap-x-14 sm:gap-x-3">
        <div className="text-white hidden sm:block">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={24}
            easing="ease-in"
            color="#000"
            duration={0.4}
          />
        </div>
        <h1 className="text-3xl font-medium">sneakers</h1>
        <ul className="flex gap-x-8 sm:hidden">
          {items.map((item, idx) => (
            <li
              key={idx}
              className="capitalize text-base text-gray-400 hover:text-orange-600 transition-all"
            >
              <a href=""> {item}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-x-10 sm:gap-x-4">
        <div className="relative">
        
          <BsCart3 size={25} />
          <h5 className="bg-orange-500 text-white absolute -top-2 -right-3 rounded-full px-2 py-1 text-xs font-extrabold">{cart}</h5>
        </div>
        <BsPersonCircle size={25} />
      </div>
      <Sidebar close={() => setOpen(false)} isOpen={isOpen} />
    </nav>
  );
};

export default Header;
