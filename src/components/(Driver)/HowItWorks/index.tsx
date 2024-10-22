import Image from "next/image";
import React from "react";
import HowItWorkImg from "@/publicHowItWorks.svg";
import BlueDot from "@/publicblueDot.svg";

const HowItWorks = () => {
  return (
    <div>
      <div className="mb-20">
        <div className="grid grid-rows-1 h-full items-end lg:grid-cols-2 lg:mx-32 gap-8">
          <div>
            <div className="flex text-left flex-col justify-center my-auto h-auto w-full py-10">
              <header className="text-center font-bold text-2xl lg:text-4xl">
                How Trubooker Drivers app works
              </header>
              <div className="grid grid-row-3 mt-10">
                <div className="grid grid-cols-1 lg:ms-5 gap-12 px-5">
                  <div className="text-left my-2 flex">
                    <Image
                      className="text-left mb-6"
                      src={BlueDot}
                      alt=""
                      width={25}
                      height={25}
                    />
                    <div className="flex flex-col ms-5">
                      <h4 className="font-semibold text-left lg:h-0">
                        Sign up & Verify
                      </h4>
                      <p className="text-left sm:text-sm text-xs lg:mt-8">
                        Complete a quick and easy application process, and get
                        verified to start driving with Trubooker.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="text-left my-2 flex">
                    <Image
                      className="text-left mb-6"
                      src={BlueDot}
                      alt=""
                      width={25}
                      height={25}
                    />
                    <div className="flex flex-col ms-5">
                      <h4 className="font-semibold text-left lg:h-0">
                        Schedule a trip
                      </h4>
                      <p className="text-left sm:text-sm text-xs lg:mt-8">
                        Choose your preferred driving times and accept bookings
                        that fit your schedule.
                      </p>
                    </div>
                  </div>
                  <div className="text-left my-2 flex">
                    <Image
                      className="text-left mb-6"
                      src={BlueDot}
                      alt=""
                      width={25}
                      height={25}
                    />
                    <div className="flex flex-col ms-5">
                      <h4 className="font-semibold text-left lg:h-0">
                        Check-in Passengers
                      </h4>
                      <p className="text-left sm:text-sm text-xs lg:mt-8">
                        Preview your passengers before the ride, confirm their
                        identity, and ensure a smooth start to the trip.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="text-left my-2 flex">
                    <Image
                      className="text-left mb-6"
                      src={BlueDot}
                      alt=""
                      width={25}
                      height={25}
                    />
                    <div className="flex flex-col ms-5">
                      <h4 className="font-semibold text-left lg:h-0">
                        Drive to destination{" "}
                      </h4>
                      <p className="text-left sm:text-sm text-xs lg:mt-8">
                        Follow the best route with live tracking and ensure your
                        passengers reach their destination safely and on time.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="text-left my-2 flex">
                    <Image
                      className="text-left mb-6"
                      src={BlueDot}
                      alt=""
                      width={25}
                      height={25}
                    />
                    <div className="flex flex-col ms-5">
                      <h4 className="font-semibold text-left lg:h-0">
                        Get paid{" "}
                      </h4>
                      <p className="text-left sm:text-sm text-xs lg:mt-8">
                        Withdraw or transfer your earnings directly from the
                        app, with fast and reliable payments.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <Image
              src={HowItWorkImg}
              alt=""
              className=" ms-auto mt-auto h-auto rounded-lg w-full lg:h-auto lg:w-[499px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
