import Head from "next/head";
import { useState } from "react";
import Header from "../components/header.component";
import Content from "../components/main.component";

export default function Home() {
  const [cart, setCart] = useState(0);
  const [number, setNumber] = useState(0);
  const addToCart = () => {
    setCart(number);
  };
  const handleIncrement = () => {
    setNumber(number + 1);
  };
  const handleDecrement = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <Head>
        <title>SCAMP-C6 Assessment</title>
        <meta name="description" content="Built by Foluke Odus" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-36 sm:px-4">
        <Header cart={cart} />
        <Content
          addToCart={addToCart}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
          number={number}
        />
      </main>
    </div>
  );
}
