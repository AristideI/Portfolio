import SplitType from "split-type";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./loader.css";

export default function Loader() {
  useEffect(() => {
    const myText = new SplitType("#my-text");
    gsap.to(".char", {
      y: 0,
      stagger: 0.1,
      delay: 0.5,
      duration: 0.1,
    });
  }, []);

  return (
    <section className="w-full h-screen bg-black grid place-content-center loaderContainer relative overflow-hidden">
      <p className="text-white text-4xl loaderFont" id="my-text">
        Not just a talent ...
      </p>
      <div className="bluryRed"></div>
      <div className="bluryBlue"></div>
    </section>
  );
}
