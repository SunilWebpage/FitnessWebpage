import React, { useEffect, useState } from "react";
import "./filter.css";
import Card from "./card-con";
import Card2 from "./card2";
import Products from "./products";

export const Filter = () => {
  const [selectItem, setSelectedItems] = useState("watch");
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/search?q=${selectItem}&?limit=10`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoading(false);
      });
  }, [selectItem]);

  return (
    <div className="filter">
      <div className="filter-cont">
        <button
          onClick={() => setSelectedItems("watch")}
          className={`btn-style`}
        >
          All Services
        </button>
        <button
          onClick={() => setSelectedItems("apple")}
          className={`btn-style`}
        >
          San Francisco
        </button>
        <button
          onClick={() => setSelectedItems("laptop")}
          className={`btn-style`}
        >
          Marin
        </button>
        <button
          onClick={() => setSelectedItems("dell")}
          className={`btn-style`}
        >
          Oakland
        </button>
      </div>
      <div className="current-tab">
        {isLoading ? (
          <span>Loading...</span>
        ) : !data ? (
          <span>Processing..</span>
        ) : (
          <Products data={data} />
        )}
      </div>
    </div>
  );
};
