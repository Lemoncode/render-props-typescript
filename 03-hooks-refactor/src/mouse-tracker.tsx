import * as React from "react";
import { Coordinate } from "./model";

const useMouseHook = () => {
  const [position, setPosition] = React.useState<Coordinate>({ x: 0, y: 0 });

  const handleMouseMove = ({
    clientX,
    clientY
  }: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setPosition({ x: clientX, y: clientY });
  };

  return { position, handleMouseMove };
};

interface Props {
  render: (position: Coordinate) => React.ReactElement;
}

export const Mouse = (props: Props) => {
  const { position, handleMouseMove } = useMouseHook();

  return (
    <div
      style={{ width: "800px", height: "600px", background: "#73C84B" }}
      onMouseMove={handleMouseMove}
    >
      {props.render(position)}
    </div>
  );
};
