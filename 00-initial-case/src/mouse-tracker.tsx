import * as React from "react";

interface Coordinate {
  x: number;
  y: number;
}

export const MouseTracker = () => {
  const [position, setPosition] = React.useState<Coordinate>({ x: 0, y: 0 });

  const handleMouseMove = ({
    clientX,
    clientY
  }: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setPosition({ x: clientX, y: clientY });
  };

  return (
    <div
      style={{ height: "800px", width: "1024", background: "#73C84B" }}
      onMouseMove={handleMouseMove}
    >
      <h1>Move the mouse around!</h1>
      <p>
        The current mouse position is ({position.x}, {position.y})
      </p>
    </div>
  );
};
