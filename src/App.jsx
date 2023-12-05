import { useState } from "react";
import "./App.css";
import Landing from "./components/Landing";
import Lenis from "@studio-freight/lenis";

function App() {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    // console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  return (
    <>
      <Landing />
    </>
  );
}

export default App;
