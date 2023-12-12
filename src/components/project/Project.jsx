import "./Project.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
export default function Project() {
  let pro = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      pro.current,
      { scale: 1 },
      {
        scale: 3,
        duration: 1,
        scrollTrigger: {
          trigger: ".tri",
          start: "start 35%",
          toggleActions: "play pause continue none",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <article className="h-[500vh] w-full bg-blue-950 overflow-hidden tri">
      <div className="w-full relative">
        <img
          className="inner w-[20%] object-cover absolute top-[10vh] left-[40%]"
          src="/inner.svg"
          alt=""
          ref={pro}
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
