import { useState, useEffect, useRef } from "react";

function Hero() {
  const [jumping, setJumping] = useState(false);
  const [score, setScore] = useState(0);
  const avatarRef = useRef(null);
  const obstacleRef = useRef(null);
  const jumpingRef = useRef(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    jumpingRef.current = jumping;
  }, [jumping]);

  useEffect(() => {
    const shrink = 15;
    let frameId;

    function checkCollision() {
      if (avatarRef.current && obstacleRef.current) {
        const avatarBox = avatarRef.current.getBoundingClientRect();
        const obstacleBox = obstacleRef.current.getBoundingClientRect();

        const isOverlapping =
          avatarBox.left < obstacleBox.right &&
          -shrink &&
          avatarBox.right > obstacleBox.left &&
          +shrink;
        avatarBox.bottom > obstacleBox.top;
        if (isOverlapping && !jumpingRef.current) {
          setGameOver(true);
          setGameStarted(false);
          setScore(0);
        }
      }
      frameId = requestAnimationFrame(checkCollision);
    }

    frameId = requestAnimationFrame(checkCollision);

    return () => cancelAnimationFrame(frameId);
  }, []);

  function triggerJump() {
  setGameOver(false);
  setGameStarted(true);
  setJumping(true);
  setScore((prev) => prev + 1);
  setTimeout(() => setJumping(false), 600);
  }
  function exitGame() {
  setGameStarted(false);
  setJumping(false);
  setGameOver(false);
  setScore(0);
}

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.code === "Space") {
        e.preventDefault();

        triggerJump();
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
        <div className="hero__stage">
          <img
            ref={avatarRef}
            className={`hero__avatar ${jumping ? "hero__avatar--jump" : ""} ${gameStarted ? "hero__avatar--playing" : ""}`}
            src="/miopg.png"
            alt="Mel"
            onClick={triggerJump}
          />
          {gameOver && (
            <div className="hero__gameover">
              Game Over!
              <button onClick={() => setGameOver(false)}>Again</button>
              <button className="hero__exit" onClick={exitGame} aria-label="Exit">
      ✕
    </button>
            </div>
          )}
          {gameStarted && <div className="hero__ground"></div>}
          {gameStarted && (
            <span ref={obstacleRef} className="hero__obstacle">
              🌵
            </span>
          )}
        </div>

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
