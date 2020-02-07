import { Coordinate } from "./model";
import * as React from "react";
import { useMouseHook } from "./mouse-tracker";

//https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png

interface Props {
  mouse: Coordinate;
}

export const Cat = (props: Props) => {
  const { mouse } = props;
  return (
    <img
      alt="Cat"
      src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
      style={{
        position: "absolute",
        width: "32px",
        left: mouse.x,
        top: mouse.y
      }}
    />
  );
};

export const MouseTrackerWithCat = () => {
  const { position, handleMouseMove } = useMouseHook();

  return (
    <div
      style={{ width: "800px", height: "600px", background: "#73C84B" }}
      onMouseMove={handleMouseMove}
    >
      <h1>Move the mouse around!</h1>
      <Cat mouse={position} />
    </div>
  );
};
