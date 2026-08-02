import { useState } from "react";
import { useEffect } from "react";

function Hero() {
  const [jumping, setJumping] = useState(false);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.code === "Space") {
        e.preventDefault()
        setJumping(true);
        setTimeout(() => setJumping(false), 500);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section className="hero">
      <div className="container hero__inner">
        <h1>Hello world</h1>
        <img
          className={`hero__avatar ${jumping ? "hero__avatar--jump" : ""}`}
          src="/miopg.png"
          alt="Mel"
        />
        <p className="hero__subtitle">
          I'm looking for a good opportunity to grow.
        </p>
        <a href="#projects" className="button">
          Have a look at my projects
        </a>
      </div>
    </section>
  );
}

export default Hero;
