import Image from "next/image";
import React from "react";
import Structure from "./structue";
import { Service } from "@/constants";

const ServeConvenience = () => {
  return (
    <div className="">
      <div className="flex text-center flex-col lg:py-20 py-10 justify-center my-auto h-auto w-full">
        <header className="lg:font-bold font-normal xl:text-[48px] leading-[30px] lg:leading-[50px] text-[25px] lg:mb-20">
          We Serve Convenience on Every Route!
        </header>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 px-5 lg:px-32 my-5 lg:my-0 w-full gap-10">
          {Service.map((serve: any, index: number) => (
            <Structure
              key={index}
              content={serve.content}
              icon={serve.icon}
              header={serve.header}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServeConvenience;
