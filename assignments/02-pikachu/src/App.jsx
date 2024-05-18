import { useEffect, useState } from "react";

const GRID_SIZE = 10;

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveHandler = (event) => {
      let { x, y } = position;
      console.log("A", x, y);
      const { key } = event;

      if (key === "ArrowUp" && y > 0) {
        y -= 50;
      } else if (key === "ArrowDown" && y < 450) {
        y += 50;
      } else if (key === "ArrowLeft" && x > 0) {
        x -= 50;
      } else if (key === "ArrowRight" && x < 450) {
        x += 50;
      } else if (key === " ") {
      }
      setPosition({ x, y });
    };

    window.addEventListener("keydown", moveHandler);

    return () => window.removeEventListener("keydown", moveHandler);
  }, [position]);

  return (
    <div className="bg-gray-100 w-full h-full relative">
      <div
        className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] 
        size-[500px] border-1 border-solid border-gray-200
        shadow-gray-700 shadow-lg"
      >
        {Array.from({ length: GRID_SIZE }).map((_, i) => (
          <div className="h-[10%] flex " key={i}>
            {Array.from({ length: GRID_SIZE }).map((_, j) => (
              <div
                className="w-[10%] bg-[url(./src/assets/grass.png)]"
                key={j}
              />
            ))}
          </div>
        ))}
        <div
          style={{
            top: position.y,
            left: position.x,
          }}
          className={`size-[45px] absolute bg-[url(./src/assets/pikachu.png)] bg-cover`}
        />
      </div>
    </div>
  );
}

export default App;
