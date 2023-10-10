import "./App.css";
import { useState, useEffect } from "react";
import Loader from "./components/loader/Loader";
import Hero from "./components/Hero";
function App() {
  let [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 4000);
  }, []);

  return loader ? (
    <Loader />
  ) : (
    <section>
      <Hero />
    </section>
  );
}

export default App;
