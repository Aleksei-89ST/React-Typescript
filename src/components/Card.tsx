import React, { FC } from "react";

interface CardProps {
  width?: string;
  height?: string;
  children?: React.ReactNode
}
// children - будет являться всё что внутри карточки
const Card: FC <CardProps> = ({ width, height,children }) => {
  return (
    <div style={{ width, height, border: "1px solid gray" }}>{children}</div>
  );
};

export default Card;
