import { useState } from "react";
import Hero from "../component/Hero";
import Product from "./Product";
import Nav from "../component/Nav";
import Background from "../component/Background";
const Home = () => {
  let heroData = [
    { text1: "30% OFF Limited Offer", text2: "Style that" },
    {
      text1: "Discover the Best of Bold Fashion ",
      text2: "Limited Time Only!",
    },
    { text1: "Explore Our Best Collection", text2: "Shop Now!" },
    { text1: "Choose your Perfect Fasion Fit", text2: "Now on Sale!" },
  ];

  let [heroCount, setHeroCount] = useState(0);
  return (
    <div className="overflow-x-hidden relative top-[70px]">
      <div className="w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025]">
        <Background heroCount="heroCount" />
        <Hero
          HeroCount={heroCount}
          setHeroCount={setHeroCount}
          heroData={heroData[heroCount]}
        />
      </div>
      <Product />
    </div>
  );
};

export default Home;
