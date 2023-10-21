import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import "./hero.css";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  let heroName = useRef(null);
  let heroName2 = useRef(null);
  let moto = useRef(null);
  let moto2 = useRef(null);
  let heroImage = useRef(null);
  let saint = useRef(null);
  useEffect(() => {
    let h1 = heroName.current;
    let h2 = heroName2.current;
    let m1 = moto.current;
    let m2 = moto2.current;
    let image = heroImage.current;
    let tri = saint.current;
    gsap.fromTo(
      [h1, h2],
      {
        x: 10,
        y: 20,
        duration: 1,
        scrollTrigger: {
          start: "start 35%",
          toggleActions: "play pause continue none",
          trigger: tri,
          scrub: true,
        },
      },
      {
        x: 800,
        y: -100,
        duration: 1,
        scrollTrigger: {
          start: "start 35%",
          trigger: tri,
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      [m1, m2],
      {
        x: 10,
        y: 20,
        duration: 1,
        scrollTrigger: {
          start: "start 35%",
          toggleActions: "play pause continue none",
          trigger: tri,
          scrub: true,
        },
      },
      {
        x: -800,
        y: 100,
        duration: 1,
        scrollTrigger: {
          start: "start 35%",
          toggleActions: "play pause continue none",
          trigger: tri,
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      image,
      {
        x: 10,
        y: 20,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          start: "start 35%",
          toggleActions: "play pause continue none",
          trigger: tri,
          scrub: true,
        },
      },
      {
        x: -1000,
        y: -400,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          start: "start 35%",
          toggleActions: "play pause continue none",
          trigger: tri,
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <>
      <section className="w-full h-80 bg-black"></section>
      <section className="w-full h-screen relative " ref={saint}>
        <section>
          <p
            className="font-serif text-9xl absolute top-40 left-20 -z-20"
            ref={heroName}
          >
            ARISTIDE
          </p>
          <p
            className="font-serif text-9xl strokes absolute top-40 left-20 z-20"
            ref={heroName2}
          >
            ARISTIDE
          </p>
        </section>
        <section>
          <p
            className="font-serif text-8xl leading-[5rem] absolute bottom-40 right-0 -z-20"
            ref={moto}
          >
            WHERE LOGIC <br />
            MEETS IMAGINATION
          </p>
          <p
            className="font-serif text-8xl leading-[5rem] strokes absolute bottom-40 right-0 z-20"
            ref={moto2}
          >
            WHERE LOGIC <br />
            MEETS IMAGINATION
          </p>
        </section>
        <img
          className="w-1/3 h-[80vh] absolute bottom-20 right-20 object-cover"
          src="/hero.png"
          alt="Hero image"
          ref={heroImage}
        />
      </section>
      <div className="h-screen w-full"> The saint</div>
    </>
  );
}
