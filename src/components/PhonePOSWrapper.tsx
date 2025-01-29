"use client";

import { useState, useEffect } from "react";

export default function PhonePOSWrapper() {
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
      <div className="max-w-[400px] w-full">
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
            <div className="absolute inset-3 rounded-[2rem] overflow-hidden bg-white">
              <iframe
                src="https://i4tmv9xv6fxgjbn05.lite.vusercontent.net/"
                className="w-full h-full"
                style={{ height: iframeHeight }}
                allow="clipboard-write"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
