import "./App.css";
import { useState, useEffect } from "react";
import Loader from "./components/loader/Loader";
import Hero from "./components/Hero/Hero";
import { gsap } from "gsap";
function App() {
  let [loader, setLoader] = useState(true);
  let tl = new gsap.timeline();
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoader(false);
  //   }, 4000);
  // }, []);

  // return loader ? (
  //   <Loader />
  // ) : (
  //   <section>
  //     <Hero />
  //   </section>
  // );

  return (
    <section>
      <Hero timeline={tl} />
    </section>
  );
}

export default App;
