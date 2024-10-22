import { Link } from "lucide-react";
import Image from "next/image";
import React from "react";
import Phone2Combo from "@/publicphotoClipping.png";

const TripDetails = () => {
  return (
    <div className="lg:mx-32 mx-5">
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:my-20 my-14">
        <div className="justify-center flex flex-col xl:text-left text-center xl:items-start items-center">
          <h1 className="lg:font-bold font-normal xl:text-[48px] leading-[30px] lg:leading-[50px] text-[25px] text-black md:w-full w-[70%]">
            Know Before You Go - Trip Details at Your Fingertips
          </h1>
          <h1 className="text-black lg:text-lg mt-10 text-sm  font-normal xl:w-[600px] w-[80%] my-5">
            Trubooker gives you full transparency with detailed trip information
            before you book. View all the essentials—like departure times, route
            stops, travel duration, and amenities—so you can make an informed
            decision. With Trubooker, you&apos;ll have everything you need to
            choose the perfect trip with confidence.
          </h1>
        </div>
        <div className="lg:ms-auto mx-auto h-full">
          <Image
            src={Phone2Combo}
            alt=""
            className="h-auto w-[300px] lg:w-[499px] rounded-[60px]"
          />
        </div>
      </div>
    </div>
  );
};

export default TripDetails;
