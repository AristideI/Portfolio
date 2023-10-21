import "./App.css";
// import { gsap } from "gsap";
// import { useState, useEffect } from "react";
// import Loader from "./components/loader/Loader";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Carouser from "./components/carouser/Carouser";
function App() {
  // let [loader, setLoader] = useState(true);
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
      <Hero />
      <Carouser />
      <About />
    </section>
  );
}

export default App;
