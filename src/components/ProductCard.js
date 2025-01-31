import React from "react";

export default function ProductCard({ data }) {
  const { brand, description, images, price } = data;
  return (
    <div className="border p-3 w-[200px]">
      <span>{brand}</span>
      <span>{price}</span>
      {/* <span>{description}</span> */}
      <img src={images[1]} alt={brand} />
    </div>
  );
}
