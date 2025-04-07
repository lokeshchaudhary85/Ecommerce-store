"use client";

import React from "react";
import { LuUpload } from "react-icons/lu";

export default function Subcategory({ category, count }) {
  return (
     // Main container for Subcategory section
    <div className="h-[20px] w-[1400px] flex justify-between mt-14 ">
      <div className="ml-16">
        <div className="ml-18 capitalize">
          {category}
          <div className="w-[7px] h-[6px] mx-1 border rounded-full bg-white inline-block"></div>
          {category}
        </div>
      </div>

      <div className="flex gap-3 mr-9">
        <p>{count} Products</p>
        <LuUpload className="cursor-pointer" />
      </div>
    </div>
  );
}
