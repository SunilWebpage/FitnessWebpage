import React from "react";

export default function Card2({ props }) {
  const { cardImage2: CardImage2 } = props;
  return (
    <div className="card-cont2">
      <div className="m-img">
        <img src={CardImage2} alt="" />
      </div>
    </div>
  );
}
