import React, { useState } from "react";
import ProductWishlist from "../common/whishlist/ProductWishlist";
import ShopProduct from "../shop/ShopProduct";
import Banner from "./Banner";
import ProductDiscount from "./ProductDiscount";

export default function MainHomeContent() {
  return (
    <div>
      <div className="mt-10">
        <h2 className="text-center sm:text-2xl uppercase font-normal">
          V-Day Special
        </h2>
      </div>
      <ShopProduct />
      <div className="mt-7">
        <Banner />
      </div>
    </div>
  );
}
