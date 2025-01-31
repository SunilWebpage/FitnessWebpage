import React from "react";
import Best from "../components/best";
import useScrollToTop from "../components/useScrollToTop";
import Contact from "../components/contact";
import Footer from "./footer";

const bestData = [
  {
    Head1: "Silver Membership",
    Doler: "$",
    Beas2: "30",
    Parat: "Every month",
    Paraf: "Short-term trial for beginners",
    Paras: "Valid for one month",
    Bton: "Select",
  },
  {
    Head1: "Gold Membership",
    Doler: "$",
    Beas2: "25",
    Parat: "Every month",
    Paraf: "Ideal for advanced trainers",
    Paras: "Valid for 12 months",
  },
  {
    Head1: "Platinum Membership",
    Doler: "$",
    Beas2: "40",
    Parat: "Every month",
    Paraf: "Perfect for committed trainers",
    Paras: "Perfect for committed trainers",
  },
];

export default function Plans() {
  useScrollToTop();
  return (
    <div className="border  border-transparent ">
      <div className="mt-20">
        <div className="px-20">
          <div className="our-class">
            <div>
              <h1>Plans & Pricing</h1>
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-wrap gap-10 py-10 ">
          {bestData.map((val, i) => (
            <Best props={val} key={i} />
          ))}
        </div>
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
