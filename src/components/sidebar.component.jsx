import React from "react";
import { BsCart3, BsPersonCircle } from "react-icons/bs";

const Sidebar = ({ close, isOpen }) => {
  const items = ["collections", "men", "women", "about", "contact"];
  return (
    <aside
      className={`bg-orange-400 sidebar h-full py-5 max-w-full w-full z-50 fixed top-0 left-0 hidden sm:block transition-all duration-300 transform px-8 ${
        !isOpen ? "-translate-x-full" : ""
      }`}
    >
      <div className="flex gap-x-5 pt-2">
      <button onClick={close}>
          <svg
            width="19"
            height="21"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.76893 10.4285L18.2044 19.791M1.3334 19.791L9.76893 10.4285L1.3334 19.791ZM18.2044 1.06604L9.76732 10.4285L18.2044 1.06604ZM9.76732 10.4285L1.3334 1.06604L9.76732 10.4285Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <a href={"/"}>
          <h1 className="text-3xl font-medium text-white">sneakers</h1>
        </a>
      
      </div>
      <ul className="grid  space-y-10 mt-14">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="capitalize text-xl text-white hover:text-orange-600 transition-all"
          >
            <a href=""> {item}</a>
          </li>
        ))}
      </ul>
    
    </aside>
  );
};

export default Sidebar;
