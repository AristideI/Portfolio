import "./Carouser.css";
import { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Carouser() {
  useEffect(() => {
    gsap.fromTo(
      [".sec1", ".sec2"],
      {
        rotate: "5deg",
        duration: 1,
        scrollTrigger: {
          trigger: ".trig",
          start: "start 80%",
          toggleActions: "play pause continue none",
          scrub: true,
        },
      },
      {
        rotate: "-5deg",
        duration: 1,
        scrollTrigger: {
          trigger: ".trig",
          start: "start 80%",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <>
      <article className="trig">
        <section className="carousel sec1">
          <section className="carousel-container">
            <section className="carousel-slide">
              <img
                className="w-60 h-40 object-cover bg-black"
                src="/image/1.png"
                alt="project"
              />
              <img
                className="w-60 h-40 object-cover"
                src="/image/2.png"
                alt="project"
              />
              <img
                className="w-60 h-40 object-cover"
                src="/image/3.png"
                alt="project"
              />
              <img
                className="w-60 h-40 object-cover"
                src="/image/4.png"
                alt="project"
              />
              <img
                className="w-60 h-40 object-cover"
                src="/image/5.png"
                alt="project"
              />
              <img
                className="w-60 h-40 object-cover"
                src="/image/6.png"
                alt="project"
              />
              <img
                className="w-60 h-40 object-cover"
                src="/image/7.png"
                alt="project"
              />
              <img
                className="w-60 h-40 object-cover"
                src="/image/8.png"
                alt="project"
              />
              <img
                className="w-60 h-40 object-cover"
                src="/image/9.png"
                alt="project"
              />
              <img
                className="w-60 h-40 object-cover"
                src="/image/10.png"
                alt="project"
              />
              <img
                className="w-60 h-40 object-cover"
                src="/image/1.png"
                alt="project"
              />
              <img
                className="w-60 h-40 object-cover"
                src="/image/2.png"
                alt="project"
              />
              <img
                className="w-60 h-40 object-cover"
                src="/image/3.png"
                alt="project"
              />
              <img
                className="w-60 h-40 object-cover"
                src="/image/4.png"
                alt="project"
              />
              <img
                className="w-60 h-40 object-cover"
                src="/image/5.png"
                alt="project"
              />
              <img
                className="w-60 h-40 object-cover"
                src="/image/6.png"
                alt="project"
              />
              <img
                className="w-60 h-40 object-cover"
                src="/image/7.png"
                alt="project"
              />
              <img
                className="w-60 h-40 object-cover"
                src="/image/8.png"
                alt="project"
              />
              <img
                className="w-60 h-40 object-cover"
                src="/image/9.png"
                alt="project"
              />
              <img
                className="w-60 h-40 object-cover"
                src="/image/10.png"
                alt="project"
              />
            </section>
          </section>
        </section>
        <section className="carousel1 sec2">
          <section className="carousel-container1">
            <section className="carousel-slide1">
              <img
                className="w-60 h-40 object-cover"
                src="/image/1.png"
                alt="project"
              />
              <img
                className="w-60 h-40 object-cover"
                src="/image/2.png"
                alt="project"
              />
              <img
                className="w-60 h-40 object-cover"
                src="/image/3.png"
                alt="project"
              />
              <img
                className="w-60 h-40 object-cover"
                src="/image/4.png"
                alt="project"
              />
              <img
                className="w-60 h-40 object-cover"
                src="/image/5.png"
                alt="project"
              />
              <img
                className="w-60 h-40 object-cover"
                src="/image/6.png"
                alt="project"
              />
              <img
                className="w-60 h-40 object-cover"
                src="/image/7.png"
                alt="project"
              />
              <img
                className="w-60 h-40 object-cover"
                src="/image/8.png"
                alt="project"
              />
              <img
                className="w-60 h-40 object-cover"
                src="/image/9.png"
                alt="project"
              />
              <img
                className="w-60 h-40 object-cover"
                src="/image/10.png"
                alt="project"
              />
              <img
                className="w-60 h-40 object-cover"
                src="/image/1.png"
                alt="project"
              />
              <img
                className="w-60 h-40 object-cover"
                src="/image/2.png"
                alt="project"
              />
              <img
                className="w-60 h-40 object-cover"
                src="/image/3.png"
                alt="project"
              />
              <img
                className="w-60 h-40 object-cover"
                src="/image/4.png"
                alt="project"
              />
              <img
                className="w-60 h-40 object-cover"
                src="/image/5.png"
                alt="project"
              />
              <img
                className="w-60 h-40 object-cover"
                src="/image/6.png"
                alt="project"
              />
              <img
                className="w-60 h-40 object-cover"
                src="/image/7.png"
                alt="project"
              />
              <img
                className="w-60 h-40 object-cover"
                src="/image/8.png"
                alt="project"
              />
              <img
                className="w-60 h-40 object-cover"
                src="/image/9.png"
                alt="project"
              />
              <img
                className="w-60 h-40 object-cover"
                src="/image/10.png"
                alt="project"
              />
            </section>
          </section>
        </section>
      </article>
    </>
  );
}
