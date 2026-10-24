import { Link } from "lucide-react";
import Image from "next/image";
import React from "react";
import PhoneMock from "@/publicphoneMock.png";

const StayOnTrack = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:my-20 my-14">
          <div className="mx-auto h-full">
            <Image
              src={PhoneMock}
              alt=""
              className="h-auto w-[300px] lg:w-[455px] rounded-[40px]"
            />
          </div>
          <div className="justify-center xl:pe-20 flex flex-col xl:text-left text-center xl:items-start items-center">
            <h1 className="lg:font-bold font-normal xl:text-[48px] leading-[30px] lg:leading-[50px] text-[25px] text-black md:w-full w-[70%]">
              Stay In the Know with Live Route Tracking
            </h1>
            <h1 className="text-black lg:text-xl text-sm  font-normal xl:w-[600px] w-[80%] my-5">
              With Trubooker&apos;s live tracking feature, you&apos;re always in
              control of your journey. See your bus&apos;s real-time location on
              the map, track its progress, and get accurate arrival times.
              Whether you&apos;re planning your pickup or simply want peace of
              mind, our live tracking keeps you informed every step of the way.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayOnTrack;
