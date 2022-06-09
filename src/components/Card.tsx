import React, { FC } from "react";

//перечисление что будет содержать props variant
export enum CardVariant {
  outlined = "outlined",
  primary = "primary",
}

interface CardProps {
  width?: string;
  height?: string;
  children?: React.ReactNode;
  variant: CardVariant;
}
// children - будет являться всё что внутри карточки
const Card: FC<CardProps> = ({ width, height, variant, children }) => {
  // const [state,setState] = useState(0)
  return (
    <div
      style={{
        width,
        height,
        border: variant === CardVariant.outlined ? "1px solid gray" : "none",
        background: variant === CardVariant.primary ? "Lightgray" : "",
      }}
    >
      {children}
    </div>
  );
};

export default Card;
