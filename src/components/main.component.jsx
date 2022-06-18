import React, { useState } from "react";
import Image from "next/image";
import { BsCart3 } from "react-icons/bs";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const Content = ({ addToCart, number, handleDecrement, handleIncrement }) => {
  const sneakers = ["sneakers01", "sneakers02", "sneakers03", "sneakers04"];

  const [image, setImage] = useState(sneakers[0]);

  const length = sneakers.length;
  const next = () => {
    setImage(sneakers[1]);
  };

  const previous = () => {
    setImage(sneakers[0]);
  };
  return (
    <section className="py-20 w-11/12 mx-auto grid grid-cols-2 gap-x-20 sm:grid-cols-1 sm:py-10 sm:w-full">
      <div className="w-4/5 mx-auto space-y-4 sm:w-full">
        <div className="relative">
          <Image
            width={500}
            height={500}
            objectFit="cover"
            src={`/images/${image}.jpg`}
            alt="sneakers"
            className="rounded-lg"
          />
          <MdKeyboardArrowLeft
            size={40}
            className="absolute border rounded-full bg-white top-1/2 left-0 cursor-pointer hidden sm:block"
            onClick={previous}
          />
          <MdKeyboardArrowRight
            size={40}
            className="absolute border rounded-full bg-white top-1/2 right-0 cursor-pointer hidden sm:block"
            onClick={next}
          />
        </div>
        <ul className="flex justify-between sm:gap-x-4 sm:hidden">
          {sneakers.map((sneaker, idx) => (
            <li
              key={idx}
              className="relative cursor-pointer"
              onClick={() => setImage(sneaker)}
            >
              <Image
                width={100}
                height={100}
                objectFit="cover"
                src={`/images/${sneaker}.jpg`}
                alt="sneakers"
                className="rounded-lg "
              />
              <div className="absolute top-0 h-full rounded-lg border-orange-600 w-full hover:bg-orange-50 hover:border-2 mix-blend-multiply opacity:0 hover:opacity-75 transition-all"></div>
            </li>
          ))}
        </ul>
      </div>
      <div className="pt-14 w-4/5 space-y-14 sm:w-full sm:pt-8">
        <div className="space-y-7">
          <h6 className="uppercase text-sm font-bold text-orange-500">
            sneaker company
          </h6>
          <h2 className="text-4xl capitalize font-extrabold">
            Fall limited edition sneakers
          </h2>
          <p className="text-gray-400 text-base">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they&apos;ll withstand
            everything the weather can offer.
          </p>
          <div className="sm:flex justify-between items-center">
            <h4 className="font-extrabold flex gap-x-6 text-2xl items-center ">
              $125.00
              <span className="text-xs bg-orange-50 py-1 px-2 rounded-lg text-orange-500 sm:text-sm">
                50%
              </span>
            </h4>
            <del className="text-gray-400 text-sm font-bold sm:text-base">
              $250.00
            </del>
          </div>
        </div>{" "}
        <div className="grid grid-cols-2 mt-10 sm:grid-cols-1 gap-y-4">
          <div className="flex sm:w-full">
            <button
              className="text-orange-600 bg-gray-100 font-extrabold text-2xl py-3 px-6 rounded-tl-md rounded-bl-md hover:opacity-70 sm:w-full"
              onClick={handleDecrement}
              disabled={number <= 0}
            >
              -
            </button>

            <h5 className="text-black bg-gray-100 font-extrabold text-xl py-3 px-8">
              {number}
            </h5>

            <button
              className="text-orange-600 bg-gray-100 font-extrabold text-2xl py-3 px-8 rounded-tr-md rounded-br-md hover:opacity-70  sm:w-full"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>

          <button
            className="flex bg-orange-500 text-white items-center rounded-lg p-3 gap-4 justify-center font-bold hover:opacity-70  sm:w-full"
            onClick={addToCart}
          >
            <BsCart3 size={16} color="#fff" />
            Add to cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default Content;
