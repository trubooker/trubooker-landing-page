"use client";

import React from "react";
import FooterBody from "./FooterBody";

const Footer = () => {
  return (
    <div className="relative isolate overflow-hidden bg-[--primary]">
      <div className="mx-auto max-w-7xl h-full">
        <div className="grid grid-rows-1 my-auto text-left lg:text-center mx-auto w-full">
          <FooterBody />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between items-center border-[#7C8DB5] border-t-2 py-3">
        <div className="lg:ms-20 text-white font-light ">
          © 2024 AquaTrack. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};
export default Footer;
