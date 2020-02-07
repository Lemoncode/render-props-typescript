import { Coordinate } from "./model";
import * as React from "react";
import { Mouse } from "./mouse-tracker";

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
  return (
    <div>
      <h1>Move the mouse around!</h1>
      <Mouse render={position => <Cat mouse={position} />} />
    </div>
  );
};
