import React from "react";
import Image from "next/image";

export default function Category() {
  return (
      // Main container for Category section
    <div className=" h-[130px] w-[1300px] p-8 flex justify-between flex-row c ">
      <div className="text-center">
        <img
          alt="Icon of various bags"   // Alt text for SEO & Accessibility
          className="mx-auto mb-2 h-[100px] w-[100px]  object-contain"
          height="100"
          src="/images/image1.jpg"
          width="100"
        />
        <p>All Bags</p>
      </div>
      <div className="text-center">
        <img
          alt="Icon of a vanity pouch"
          className="mx-auto mb-2 h-[100px] w-[100px]  object-contain"
          height="100"
          src="/images/image2.jpg"        
          width="100"
        />
        <p>Vanity Pouch</p>
      </div>
      <div className="text-center">
        <img
          alt="Icon of a tote bag"
          className="mx-auto mb-2 h-[100px] w-[100px]  object-contain"
          height="100"
           src="/images/image3.jpg"
          width="100"
        />
        <p>Tote Bag</p>
      </div>
      <div className="text-center">
        <img
          alt="Icon of a duffle bag"
          className="mx-auto mb-2 h-[100px] w-[100px]  object-contain"
          height="100"
           src="/images/image4.jpg"
          width="100"
        />
        <p>Duffle Bag</p>
      </div>
      <div className="text-center">
        <img
          alt="Icon of a laptop sleeve"
          className="mx-auto mb-2 h-[100px] w-[100px]  object-contain"
          height="100"
           src="/images/image5.jpg"
          width="100"
        />
        <p>Laptop Sleeve</p>
      </div>
      <div className="text-center">
        <img
          alt="Icon of a messenger bag"
          className="mx-auto mb-2 h-[100px] w-[100px]  object-contain"
          height="100"
           src="/images/image6.jpg"
          width="100"
        />
        <p>Messenger Bags</p>
      </div>
      <div className="text-center mr-7">
        <img
          alt="Icon of a sling bag"
          className="mx-auto mb-2 h-[100px] w-[100px]  object-contain"
          height="100"
           src="/images/image7.jpg"
          width="100"
        />
        <p>Slings Bags</p>
      </div>
      <div className="text-center mr-7">
        <img
          alt="Icon of a sling bag"
          className="mx-auto mb-2 h-[100px] w-[100px]  object-contain"
          height="100"
           src="/images/image8.jpg"
          width="100"
        />
        <p>Handbags</p>
      </div>
    </div>
  );
}
