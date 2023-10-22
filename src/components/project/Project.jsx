import "./Project.css";
// import { gsap } from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import { useEffect } from "react";
// gsap.registerPlugin(ScrollTrigger);
export default function Project() {
  return (
    <article className="h-[500vh] w-full bg-blue-950">
      <div className="w-full relative">
        <img
          className="inner w-[20%] object-cover absolute top-[10vh] left-[40%]"
          src="/inner.svg"
          alt=""
        />
        <img
          className="inner2 w-[30%] object-cover absolute top-0 left-[35%]"
          src="/inner.svg"
          alt=""
        />
      </div>
    </article>
  );
}
