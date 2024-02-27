"use client";

import React, { useState, useEffect } from "react";
import AutoCompleteAddress from "./AutoCompleteAddress";

const Booking = () => {
  const [screenHeight, setScreenHeight] = useState(0);

  useEffect(() => {
    const updateScreenHeight = () => {
      setScreenHeight(window.innerHeight * 0.72);
    };

    // Update screen height initially
    updateScreenHeight();

    // Update screen height on window resize
    window.addEventListener("resize", updateScreenHeight);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateScreenHeight);
    };
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-[20px] font-semibold">Booking</h1>
      <div
        className="p-5 border-[1px] rounded-md"
        style={{ height: screenHeight }}
      >
        <AutoCompleteAddress />
      </div>
    </div>
  );
};

export default Booking;
