"use client";

import Image from "next/image";
import React from "react";
import Phone1 from "@/publicPhone1.png";
import Phone2 from "@/publicPhone2.png";
import Android from "@/publicplayStore.png";
import IPhone from "@/publicAppStore.png";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="grid grid-rows-1 lg:grid-cols-2 lg:mt-10 mt-5 xl:mx-32 lg:mx-20 mx-5">
      <div className="justify-center  flex flex-col xl:text-left text-center xl:items-start items-center">
        <h1 className="hidden lg:block font-bold xl:text-[48px] leading-[4rem] text-[40px] text-black md:w-full w-[70%]">
          <span className="text-[--primary]">Redirecting</span> your <br />{" "}
          plans into <span className="text-[--primary-orange]">Reality</span>
        </h1>
        <h1 className="lg:hidden xl:text-[48px] leading-[50px] text-[30px] text-black md:w-full w-[70%]">
          <span className="text-[--primary]">Redirecting</span> your <br />{" "}
          plans into <span className="text-[--primary-orange]">Reality</span>
        </h1>
        <h1 className="text-black lg:text-xl text-sm  font-normal xl:w-[600px] w-[80%] my-5">
          TruBooker connects you with reliable transport options for seamless
          travel between urban and extra-urban areas.
        </h1>
        <div className="flex flex-col lg:flex-row items-center gap-x-3">
          <Link
            href={""}
            className="w-[170px] py-4 bg-[--primary] hover:bg-[--primary-btn] font-bold text-white hover:scale-105 duration-300 hover:text-white rounded-full p-5 my-[12px]"
          >
            <span className="flex items-center gap-x-3">
              <Image src={Android} alt="" className="w-5 h-5  lg:w-auto" /> Play
              store
            </span>
          </Link>
          <Link
            href={""}
            className="w-[170px] py-4 bg-[--primary] hover:bg-[--primary-btn] font-bold text-white hover:scale-105 duration-300 hover:text-white rounded-full p-5 my-[12px]"
          >
            <span className="flex items-center gap-x-3">
              <Image src={IPhone} alt="" className="w-5 h-5  lg:w-auto" />{" "}
              <span> App Store</span>
            </span>
          </Link>
        </div>
      </div>{" "}
      <div className="lg:w-full lg:ms-auto mx-auto lg:mx-0 mt-10 sm:ps-10 w-full lg:mt-0">
        <div className="h-[240px] sm:h-[290px] lg:h-[500px] -z-10 mx-auto w-[150px] sm:w-[299px] lg:w-[499px] flex">
          <Image src={Phone1} alt="" className="w-[199px]  lg:w-auto" />
          <Image
            className="h-[250px] sm:h-[290px] lg:h-[500px] right-10 lg:right-16 relative"
            src={Phone2}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
