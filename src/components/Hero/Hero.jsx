// import { gsap } from "gsap";
// import { useEffect, useRef } from "react";
// import "./hero.css";
// export default function Hero() {
//   let link1 = useRef(null);
//   let link2 = useRef(null);
//   let link3 = useRef(null);
//   let link4 = useRef(null);
//   let link5 = useRef(null);

//   useEffect(() => {
//     gsap.from([link1, link2, link3, link4, link4], {
//       y: -200,
//       opacity: 0,
//       duration: 0.5,
//       stagger: {
//         amount: 0.4,
//       },
//     });
//   }, []);
//   return (
//     <article className="text-white px-[10%] py-4">
//       <nav className="flex justify-between">
//         <p className="logo font-serif">A.</p>
//         <section className="text-white flex justify-between items-center gap-4">
//           <a href="#" ref={(el) => (link1 = el)}>
//             Home
//           </a>
//           <a href="#" ref={(el) => (link2 = el)}>
//             About
//           </a>
//           <a href="#" ref={(el) => (link3 = el)}>
//             Portfolio
//           </a>
//           <a href="#" ref={(el) => (link4 = el)}>
//             Experience
//           </a>
//           <a href="#" ref={(el) => (link5 = el)}>
//             Contact
//           </a>
//         </section>
//       </nav>
//     </article>
//   );
// }

import React, { useRef, useEffect } from "react";
import "./Hero.css";
import { gsap } from "gsap";
export default function Hero({ timeline }) {
  let logo = useRef(null);
  let menu_item1 = useRef(null);
  let menu_item2 = useRef(null);
  let menu_item3 = useRef(null);
  useEffect(() => {
    if (!timeline) return;
    timeline.from(logo, 1, {
      opacity: 0,
      y: "100",
    });
    timeline.from([menu_item1, menu_item2, menu_item3], 2, {
      opacity: 0,
      y: -200,
      stagger: {
        amount: 0.4,
      },
    });
  }, [logo]);
  return (
    <div>
      <div className="header">
        <div className="logo" ref={(el) => (logo = el)}>
          Logo
        </div>
        <div className="menu">
          <div className="menu-item" ref={(el) => (menu_item1 = el)}>
            About
          </div>
          <div className="menu-item" ref={(el) => (menu_item2 = el)}>
            Journal
          </div>
          <div className="menu-item" ref={(el) => (menu_item3 = el)}>
            Contact
          </div>
        </div>
      </div>
    </div>
  );
}
