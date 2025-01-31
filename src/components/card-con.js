import React from "react";
import "./card.css";

export default function Card({ props }) {
  const { headName: CardName, cardImage: CardImg } = props;

  return (
    <div className="card-cont">
      <div className="m-img ">
        <img src={CardImg} alt="" />
      </div>
      <div className="p-5">
        <div className="card-h">
          <h1>{CardName}</h1>
        </div>

        <div className="card-p">
          <p>Mon, Tue, Wed, Thu, Fri</p>
          <p>1 hr</p>
          <p>$25</p>
        </div>
        <div className="card-btn">
          <button>Book Now</button>
        </div>
      </div>
    </div>
  );
}
