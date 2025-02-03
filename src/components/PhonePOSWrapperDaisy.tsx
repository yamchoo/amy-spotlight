"use client";
import { ArrowLeft, MoreVertical, Wifi, Bluetooth, Battery, Search, Printer } from "lucide-react"

import { useState, useEffect } from "react";

export default function PhonePOSWrapperDaisy() {
  const [iframeHeight, setIframeHeight] = useState("0px");

  useEffect(() => {
    const updateIframeHeight = () => {
      const width = document.getElementById("phone-container")?.offsetWidth || 0;
      setIframeHeight(`${width * 2}px`); // 2:1 aspect ratio for typical phone shapes
    };

    updateIframeHeight();
    window.addEventListener("resize", updateIframeHeight);
    return () => window.removeEventListener("resize", updateIframeHeight);
  }, []);

  return (
    <div className="w-full min-h-scree p-4 flex items-center justify-center">
      <div className="max-w-[600px] w-full">
        <div
          id="phone-container"
          className="relative bg-black rounded-[3rem] p-3 shadow-xl"
          style={{ paddingBottom: "calc(200% + 1.5rem)" }} // 2:1 aspect ratio + padding
        >
          {/* Phone frame */}
          <div className="absolute inset-0 bg-black rounded-[2.5rem]">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl"></div>

            {/* Buttons */}
            <div className="absolute right-[-4px] top-16 w-1 h-12 bg-gray-800 rounded-l"></div>
            <div className="absolute left-[-4px] top-20 w-1 h-16 bg-gray-800 rounded-r"></div>
            <div className="absolute left-[-4px] top-40 w-1 h-16 bg-gray-800 rounded-r"></div>

            {/* Screen */}

            <div className="absolute inset-3 rounded-[2rem] overflow-hidden  bg-slate-500">


      {/* Header */}
      <div className="navbar bg-base-100 min-h-0 py-2">
        <div className="flex-1">
          <button className="btn btn-ghost btn-circle">
            <ArrowLeft className="h-6 w-6" />
          </button>
          <div className="flex items-center space-x-2">
            <h1 className="text-base font-semibold">#13000</h1>
            <span className="text-gray-400">|</span>
            <span className="flex items-center">
              <svg className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M12 12m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0" />
              </svg>
              2
            </span>
          </div>
        </div>
        <div className="flex-none gap-2">
          <div className="badge badge-outline">Dine In</div>
          <button className="btn btn-ghost btn-circle">
            <MoreVertical className="h-6 w-6" />
          </button>
        </div>
      </div>

         
         
{/*carasoul w grid*/}
<div className="carousel carousel-start space-x-4 p-4 max-w-md overflow-x-auto snap-x snap-mandatory">
  {[ "Drinks",
            "Dinner",
            "Burgers",
            "Pizza",
            "Juice",
            "Beer",
            "Salads",
            "Soups",
            "Appetizers",
            "Soda",
            "Grill Meats",
            "Fish",
            "Vegan Meals",
            "Kids Menu",
            "Dessert",
            "Coctails",
            "Spirit",
            "Wine",
].map((item) => (
    <div key={item} className="carousel-item">
      <button className="btn btn-neutral normal-case text-sm h-auto">
        {item}
      </button>
    </div>
  ))}
</div>



{/*grid*/}
   <div className="px-4 pb-20">
        <div className="grid grid-cols-3 gap-4 mt-4">
          {[
            "Drinks",
            "Dinner",
            "Burgers",
            "Pizza",
            "Juice",
            "Beer",
            "Salads",
            "Soups",
            "Appetizers",
            "Soda",
            "Grill Meats",
            "Fish",
            "Vegan Meals",
            "Kids Menu",
            "Dessert",
            "Coctails",
            "Spirit",
            "Wine",
          ].map((item) => (
            <button key={item} className="btn btn-neutral normal-case h-auto py-4">
              {item}
            </button>
          ))}
        </div>
      </div>



            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
