import { useEffect, useState } from "react";

const GRID_COUNT = 10;

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isFlip, setIsFlip] = useState(false);
  const [isJump, setIsJump] = useState(false);
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let timeout = null;

    const moveHandler = (event) => {
      let { x, y } = position;
      const { key } = event;

      if (isMoving) return null;

      if (key === "ArrowUp" && y > 0) {
        y -= 50;
      } else if (key === "ArrowDown" && y < 450) {
        y += 50;
      } else if (key === "ArrowLeft" && x > 0) {
        x -= 50;
        setIsFlip(true);
      } else if (key === "ArrowRight" && x < 450) {
        x += 50;
        setIsFlip(false);
      } else if (key === " ") {
        setIsJump(true);
        setTimeout(() => {
          setIsJump(false);
        }, 300);
      }
      setIsMoving(true);
      setPosition({ x, y });

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsMoving(false);
      }, 50);
    };

    window.addEventListener("keydown", moveHandler);
    return () => {
      window.removeEventListener("keydown", moveHandler);
    };
  }, [position, isMoving]);

  return (
    <div className="bg-gray-100 w-full h-full relative">
      <div
        className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] 
        size-[500px] border-1 border-solid border-gray-200
        shadow-gray-700 shadow-lg
        "
      >
        <div className="w-full h-full divide-y-2 divide-solid divide-gray-300">
          {Array.from({ length: GRID_COUNT }).map((_, i) => (
            <div
              className="h-[10%] flex divide-x-2 divide-solid divide-gray-300"
              key={i}
            >
              {Array.from({ length: GRID_COUNT }).map((_, j) => (
                <div
                  className="w-[10%] bg-[url(./src/assets/grass.png)]"
                  key={j}
                />
              ))}
            </div>
          ))}
        </div>

        <div
          style={{
            top: position.y,
            left: position.x,
            transform: `${isFlip ? "rotateY(180deg)" : "rotateY(0deg)"} ${
              isJump ? "translateY(-30px)" : "translateY(0)"
            }`,
          }}
          className={`size-[45px] absolute bg-[url(./src/assets/pikachu.png)] bg-cover
          transition-all ease-in-out duration-300
          `}
        />
      </div>
    </div>
  );
}

export default App;
