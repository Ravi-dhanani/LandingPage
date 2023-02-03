import React, { useState } from "react";
import ProductWishlist from "../common/whishlist/ProductWishlist";
import useShopProduct from "../hook/product";
import ProductDiscount from "../Product/ProductDiscount";
import ProductRow from "./ProductRow";

export default function ShopProduct() {
  const lstProduct = useShopProduct();
  return (
    <div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 grid-cols-2 sm:mt-10 mt-2 mx-2 md:mx-[15px] ">
        {lstProduct.map((item: any, index: number) => (
          <div key={index}>
            <ProductRow item={item} />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-5">
        <div className="sm:p-4 p-2 sm:px-6 px-12 border border-r-4   border-l-4 border-red-600 rounded-full uppercase">
          <span className="text-base text-red-600 font-medium">
            See all v-day special
          </span>
        </div>
      </div>
    </div>
  );
}
