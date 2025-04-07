"use client";
import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Category from "@/components/Category";
import Subcategory from "@/components/Subcategory";
import { Productcontext } from "../utils/Context";
import { usePathname, useSearchParams } from "next/navigation";
import axios from "../utils/axios";

export default function Home() {
  const [products] = useContext(Productcontext);  // Getting products from Context API
  const searchParams = useSearchParams();         // Getting selected category from URL

  const category = searchParams.get("category") || "";

  const [filteredProducts, setfilteredProducts] = useState([]);


  // API call to get products by category
  const getproductscategory = async () => {
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      setfilteredProducts(data);  
    } catch (error) {
      console.log(error);
    }
  };
  

   // useEffect runs when category or products change
  useEffect(() => {
    if (category) {
      getproductscategory();
    } else {
      setfilteredProducts(products); // shows all products
    }
  }, [category, products]);

  return (
    <>
      <Navbar />
      <Category />
      <Subcategory
        category={category ? category : "All Products"}
        count={filteredProducts.length}
      />

      <div className="h-full   ml-20 p-10 pt-[5%] flex flex-wrap   ">
        {filteredProducts.map((p, i) => (
          <div
            key={i}
            className="w-[250px]  rounded-lg shadow-md hover:shadow-lg transition p-3"
          >
            {/* Product Image */}
            <div className="relative h-48 flex justify-center items-center bg-gray-100 rounded-md">
              <img
                src={p.image}
                alt="Product"
                className="object-contain h-full p-4"
              />
            </div>

            {/* Product Info */}
            <div className="mt-3">
              <h2 className="font-semibold text-sm text-white leading-tight">
                {p.title}
              </h2>

              <p className="text-white text-xm mt-1 line-clamp-2">
                {p.description}
              </p>

              <div className="flex items-center justify-between mt-3">
                <p className="font-bold text-lg text-white">₹{p.price}</p>

                <button className="bg-teal-400 hover:bg-teal-500 text-white px-3 py-1 rounded-md text-sm flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7a1 1 0 00.9 1.5h12.3M7 13L5.4 5M16 16a2 2 0 11-4 0 2 2 0 014 0zm4 0a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
