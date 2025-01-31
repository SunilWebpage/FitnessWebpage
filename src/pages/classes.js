import React from "react";
import "./classes.css";
import { Filter } from "../components/filter";
import useScrollToTop from "../components/useScrollToTop";

export default function Classes() {
  useScrollToTop();
  return (
    <div className="border  border-transparent ">
      <div className="k mt-20">
        <div className="px-20">
          <div className="our-class">
            <div>
              <h1>Our Classes</h1>
            </div>
            <div></div>
          </div>
        </div>
      </div>

      <div className="p-20">
        <Filter />
      </div>
    </div>
  );
}
