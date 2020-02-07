import * as React from "react";
import { Coordinate } from "./model";

interface Props {
  render: (position: Coordinate) => React.ReactElement;
}

export const Mouse = (props: Props) => {
  const [position, setPosition] = React.useState<Coordinate>({ x: 0, y: 0 });

  const handleMouseMove = ({
    clientX,
    clientY
  }: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setPosition({ x: clientX, y: clientY });
  };

  return (
    <div
      style={{ width: "1024", height: "600px", background: "#73C84B" }}
      onMouseMove={handleMouseMove}
    >
      {props.render(position)}
    </div>
  );
};
