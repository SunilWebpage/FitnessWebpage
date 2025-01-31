import React from "react";

export default function Best({ props }) {
  const {
    Head1: Besth1,
    Doler: span,
    Beas2: Head2,
    Paraf: Para1,
    Paras: Para2,
    Parat: para3,
  } = props;
  return (
    <div className="border w-fit flex flex-col text-center">
      <div className="p-10 space-y-5">
        <h1 className="font-mono ">{Besth1}</h1>
        <div>
          <span className="mr-24">{span}</span>
          <h1 className=" font-sans ml-5 text-8xl">{Head2}</h1>
        </div>
        <div className="space-y-5 font-light ">
          <p className="text-center">{para3}</p>
          <p>{Para1}</p>
          <p> {Para2}</p>
        </div>
        <div>
          <button className="bg-btn-col w-full p-2 text-white">Select</button>
        </div>
      </div>
      <div className="border-t place-items-center py-10 space-y-5  font-light">
        <p>I'm a benefit</p>
        <p>I'm a benefit</p>
        <p>I'm a benefit</p>
      </div>
    </div>
  );
}
