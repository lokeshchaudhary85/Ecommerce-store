"use client";
import axios from "./axios";
import React, { createContext, useEffect, useState } from "react";

export const Productcontext = createContext([]);
export default function Context(props) {
  const [products, setproducts] = useState([]);
   // Fetch Products from API
  const getproducts = async () => {
    try {
      const { data } = await axios("/products");
      setproducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  // Fetch Data Once on Component Mount
  useEffect(() => {
    getproducts();
  }, []);
  return (
     // Provide State to All Components
    <div>
        
      <Productcontext.Provider value={[products, setproducts]}>
        {props.children}
      </Productcontext.Provider>
    </div>
  );
}
