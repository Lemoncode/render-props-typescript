import { Coordinate } from "./model";
import * as React from "react";

//https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png

interface Props {
  mouse: Coordinate;
}

const Cat = (props: Props) => {
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

export const MouseWithCat = () => {
  const [position, setPosition] = React.useState<Coordinate>({ x: 0, y: 0 });

  const handleMouseMove = ({
    clientX,
    clientY
  }: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setPosition({ x: clientX, y: clientY });
  };

  return (
    <div
      style={{ width: "100%", height: "800px", background: "#73C84B" }}
      onMouseMove={handleMouseMove}
    >
      {/*
          We could just swap out the <p> for a <Cat> here ... but then
          we would need to create a separate <MouseWithSomethingElse>
          component every time we need to use it, so <MouseWithCat>
          isn't really reusable yet.
        */}
      <Cat mouse={position} />
      <h1>Move the mouse around!</h1>
      <p>
        The current mouse position is ({position.x}, {position.y})
      </p>
    </div>
  );
};
