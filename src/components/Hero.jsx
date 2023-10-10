import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <article className="text-white">
      <nav className="flex justify-between items-center px-[8%] ">
        <img className="w-40" src="/logo.svg" alt="" />
        <section>
          <a href="#">Home</a>
          <a href="#">Home</a>
          <a href="#">Home</a>
          <a href="#">Home</a>
          <a href="#">Home</a>
        </section>
      </nav>
      <section className="text-white text-5xl">
        <h1
          style={{ paddingTop: "5rem", margin: "auto 0", fontWeight: "normal" }}
        >
          Life is simple{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={["Eat", "Sleep", "Code", "Repeat!"]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={200}
              deleteSpeed={150}
              delaySpeed={1000}
            />
          </span>
        </h1>
      </section>
    </article>
  );
}
