// import { useEffect, useRef } from "react";
// import "./Project.css";
// export default function Project() {
//   const text = useRef(null);
//   useEffect(() => {
//     text.current.innerHTML = text.current.innerText
//       .split("")
//       .map(
//         (char, i) =>
//           `<span style="transform: rotate(${i * 5.5}deg)">${char}</span>`
//       )
//       .join("");
//   }, []);
//   return (
//     <article className="mt-52 w-full h-screen relative">
//       <div className="absolute top-4 left-[50%]">
//         <section className="circle relative w-60 h-60 rounded-full flex justify-center items-center">
//           <div className="texta absolute top-0 left-0 right-0 w-full h-full">
//             <p ref={text} className="text">
//               Code - Create - Conquer - think - solve -
//             </p>
//           </div>
//         </section>
//       </div>
//       <div>
//         <section className="circle relative w-96 h-96 rounded-full flex justify-center items-center">
//           <div className="texta absolute top-0 left-0 right-0 w-full h-full">
//             <p ref={text} className="text">
//               Code - Create - Conquer - think - solve -
//             </p>
//           </div>
//         </section>
//       </div>
//     </article>
//   );
// }

/* .texta {
  animation: 10s rotate infinite linear;
}

.text span {
  position: absolute;
  left: 50%;
  transform-origin: 0 120px;
}

@keyframes rotate {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0);
  }
} */
