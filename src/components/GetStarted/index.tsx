"use client";

import ButtonComponent from "../Assets/MyButton";
import Image from "next/image";
import React from "react";
import Android from "@/publicplayStore.png";
import IPhone from "@/publicAppStore.png";
import { usePathname } from "next/navigation";

const GetStarted = () => {
  const path = usePathname();
  return (
    <div className="text-center mt-10">
      <div className="w-full bg-[#FD8C00] font-semibold text-xl lg:text-[48px] leading-10 lg:leading-[70px] text-white text-center py-5 lg:py-20 rounded">
        <p className="">
          It&apos;s easy to get <br /> started. Start Now!
        </p>
        <div className=" mx-auto w-full text-center">
          <div className="flex gap-x-3 justify-center">
            <ButtonComponent
              link={`${
                path === "/driver"
                  ? "https://play.google.com/store/apps/details?id=com.trubooker.drivers"
                  : "https://play.google.com/store/apps/details?id=com.trubooker.trubooker"
              } `}
              classname={"rounded-md border-none"}
              content={
                <span className="flex items-center gap-x-3">
                  <Image src={Android} alt="" className="w-5 h-5  lg:w-auto" />
                  <span className="text-xs">Play store</span>
                </span>
              }
            />
            {/* <ButtonComponent
              link={""}
              classname={"rounded-md border-none"}
              content={
                <span className="flex items-center gap-x-3">
                  <Image src={IPhone} alt="" className="w-5 h-5  lg:w-auto" />{" "}
                  <span className="text-xs"> App Store</span>
                </span>
              }
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;

{
  /* <div className="flex flex-row items-center w-full gap-x-3">
  <Link
    href={""}
    className="w-[170px] py-4 bg-[--primary] hover:bg-[--primary-btn] font-bold text-white hover:scale-105 duration-300 hover:text-white rounded-full p-5 my-[12px]"
  >
    <span className="flex items-center gap-x-3">
      <Image src={Android} alt="" className="w-5 h-5  lg:w-auto" />
      <span className="text-xs">Play store</span>
    </span>
  </Link>
  <Link
    href={""}
    className="w-[170px] py-4 bg-[--primary] hover:bg-[--primary-btn] font-bold text-white hover:scale-105 duration-300 hover:text-white rounded-full p-5 my-[12px]"
  >
    <span className="flex items-center gap-x-3">
      <Image src={IPhone} alt="" className="w-5 h-5  lg:w-auto" />{" "}
      <span className="text-xs"> App Store</span>
    </span>
  </Link>
</div>; */
}
