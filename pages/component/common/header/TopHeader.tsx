import React from "react";

export default function TopHeader() {
  return (
    <div className="bg-red-500">
      <div className="p-[5px]">
        <div className="md:mx-[15px] xs:mx-[10px] flex justify-between">
          <div className="md:pl-[34px]">
            <span className="text-xs font-serif  text-gray-200">
              EXTRA 25% OFF ON MIN ORDER OF 1,999 INR
            </span>
          </div>
          <div>
            <span className="text-xs font-[10px] text-gray-200">
              TRACK ORDER
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
