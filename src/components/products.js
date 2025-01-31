import React from "react";
import ProductCard from "./ProductCard";

export default function Products({ data }) {
  return (
    <div className="flex justify-center    ">
      <div className=" flex gap-10 px-20 py-20  justify-center flex-wrap max-md:flex-nowrap  max-md:overflow-x-scroll max-md:justify-start ">
        {data.products.map((val, i) => (
          <ProductCard data={val} key={i} />
        ))}
      </div>
    </div>
  );
}
