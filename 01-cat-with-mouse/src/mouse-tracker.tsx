import * as React from "react";
import {Coordinate} from './model';


export const Mouse = () => {
  const [position, setPosition] = React.useState<Coordinate>({ x: 0, y: 0 });

  const handleMouseMove = ({
    clientX,
    clientY
  }: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setPosition({ x: clientX, y: clientY });
  };

  return (
    <div style={{ width: "100%", height: "100%", background: '#73C84B' }} onMouseMove={handleMouseMove}>      
      <p>
        The current mouse position is ({position.x}, {position.y})
      </p>
    </div>
  );
};


export const MouseTracker = () => {
  return (
    <div>
      <h1>Move the mouse around!</h1>
      <Mouse />
    </div>
  )
}


/*
export const MouseTracker = () => {
  const [position, setPosition] = React.useState<Coordinate>({ x: 0, y: 0 });

  const handleMouseMove = ({
    clientX,
    clientY
  }: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setPosition({ x: clientX, y: clientY });
  };

  return (
    <div style={{ width: "100%", height: "100%", background: '#73C84B' }} onMouseMove={handleMouseMove}>
      <h1>Move the mouse around!</h1>
      <p>
        The current mouse position is ({position.x}, {position.y})
      </p>
    </div>
  );
};
*/
