import Image from "next/image";
import React from "react";
import BlueDot1 from "@/publicblueDot1.svg";
import BlueDot2 from "@/publicblueDot2.svg";
import Redirect from "@/publicRedirect.svg";
import ButtonComponent from "@/components/Assets/MyButton";

const WhyUs = () => {
  return (
    <div>
      <div className="grid grid-rows-1 lg:grid-cols-3 gap-8 mx-5 lg:mx-32 py-10">
        <div>
          <div className="w-full md:mx-auto">
            <div className="h-full flex flex-col justify-around sm:items-start items-center text-left lg:text-center sm:ms-6 mx-2">
              <div className="sm:items-start items-center text-left mb-5 ms-5">
                <h3 className="font-semibold text-2xl lg:text-4xl mb-5">
                  Why Drive with Us?
                </h3>
                <p className=" text-sm">
                  We provide everything you need to maximize your earnings while
                  enjoying the freedom of flexible work. Whether you&apos;re
                  looking for full-time income or a side gig, Trubooker is your
                  path to financial freedom.
                </p>
              </div>
              <span className="flex">
                {" "}
                <ButtonComponent
                  link={
                    "https://play.google.com/store/apps/details?id=com.trubooker.drivers"
                  }
                  classname="lg:w-56 w-48 lg:h-14 h-12 bg-[--primary-orange] hover:bg-[--primary-orange-btn]"
                  content={"Get the App Now!"}
                />
                <Image
                  className="text-left"
                  src={Redirect}
                  alt=""
                  width={40}
                  height={40}
                />
              </span>
            </div>
          </div>
        </div>
        <div className="lg:mt-14">
          <div className="text-left gap-x-2 items-center  flex">
            <Image
              className="text-left"
              src={BlueDot1}
              alt=""
              width={50}
              height={50}
            />
            <h4 className="font-bold text-base text-[--primary] text-left">
              Ride at your convenience{" "}
            </h4>
          </div>
          <p className="text-left mt-3 lg:mt-5 text-base ms-5 lg:ms-0">
            Ride with ease and comfort whenever you need it.
          </p>
        </div>
        <div className="lg:mt-14">
          <div className="text-left gap-x-2 items-center  flex">
            <Image
              className="text-left"
              src={BlueDot2}
              alt=""
              width={50}
              height={50}
            />
            <h4 className="font-bold text-base text-[--primary] text-left">
              Earn after every ride{" "}
            </h4>
          </div>
          <p className="text-left mt-3 lg:mt-5 text-base ms-5 lg:ms-0">
            Turn every trip into earnings - your ride, your reward.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
