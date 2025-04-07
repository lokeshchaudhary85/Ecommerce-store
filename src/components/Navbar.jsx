"use client";
import React from "react";
import Link from "next/link";
import { FaSearch, FaEnvelope, FaBookmark, FaStore } from "react-icons/fa";
import { useState, useContext } from "react";
import { Productcontext } from "../utils/Context";

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);  // Toggle Search Input

  const [products] = useContext(Productcontext); // Access Products from Context

  // Extract distinct categories from products

  let distinct_cat =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);

  distinct_cat = [...new Set(distinct_cat)]; // Remove Duplicates

  return (
    <div className="h-[105px] w-[1350px] flex flex-col justify-center c">
      <div className="p-6 flex justify-between items-center mt-5">
        <h1 className=" tracking-[0.5em] ml-7 text-white">
          T A N N &nbsp;&nbsp; T R I M
        </h1>
        <nav>
          {showSearch && (
            <input
              type="text"
              placeholder="Search..."
              className="absolute left-[800px] transform -translate-x-1/2 py-0.5 rounded-md border border-gray-400 text-white outline-none w-[300px] items-center"
            />
          )}

          <ul className="flex gap-10 text-white mr-10">
            <li>
              <FaSearch
                className="text-xl cursor-pointer"
                onClick={() => setShowSearch(!showSearch)}
              />
            </li>
            <li>
              {" "}
              <FaEnvelope className="mr-1  text-xl cursor-pointer" />{" "}
            </li>
            <li>
              {" "}
              <FaBookmark className="mr-1  text-xl cursor-pointer" />
            </li>
            <li>
              {" "}
              <FaStore className="mr-2 text-xl cursor-pointer" />
            </li>
          </ul>
        </nav>
      </div>

      <div className="m-7">
        <div className="flex justify-center gap-13 ">
          <Link href="/" className="cursor-pointer text-white ">
            All Products
          </Link>

          {distinct_cat.map((c, i) => (
            <Link key={i} href={`/?category=${c}`} className="cursor-pointer">
              {c}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
