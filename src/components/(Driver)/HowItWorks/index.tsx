import Image from "next/image";
import React from "react";
import HowItWorkImg from "@/publicHowItWorks.svg";
import BlueDot from "@/publicblueDot.svg";

const HowItWorks = () => {
  return (
    <div id={"why"}>
      <div className="lg:mb-20 mb-10">
        <div className="grid grid-rows-1 h-full items-end lg:grid-cols-2 mx-5 lg:mx-32 gap-8">
          <div>
            <div className="flex text-left ms-5 flex-col justify-center my-auto h-auto w-full py-10">
              <header className="text-left font-bold w-[80%] text-2xl lg:text-4xl">
                How Trubooker Drivers app works
              </header>
              <div className="grid grid-row-3 mt-10">
                <div className="grid grid-cols-1 gap-12">
                  <div className="text-left my-2 flex">
                    <Image
                      className="text-left mb-6"
                      src={BlueDot}
                      alt=""
                      width={25}
                      height={25}
                    />
                    <div className="flex flex-col ms-5 w-[80%]">
                      <h4 className="font-semibold text-left text-base lg:h-0 lg:text-lg">
                        Sign up & Verify
                      </h4>
                      <p className="text-left sm:text-base text-sm lg:mt-8">
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
                    <div className="flex flex-col ms-5 w-[80%]">
                      <h4 className="font-semibold text-left text-base lg:h-0 lg:text-lg">
                        Schedule a trip
                      </h4>
                      <p className="text-left sm:text-base text-sm lg:mt-8">
                        Create booking that fits your schedule in advance by
                        setting the departure time, route, and available seats.
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
                    <div className="flex flex-col ms-5 w-[80%]">
                      <h4 className="font-semibold text-left text-base lg:h-0 lg:text-lg">
                        Check-in Passengers
                      </h4>
                      <p className="text-left sm:text-base text-sm lg:mt-8">
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
                    <div className="flex flex-col ms-5 w-[80%]">
                      <h4 className="font-semibold text-left text-base lg:h-0 lg:text-lg">
                        Drive to destination{" "}
                      </h4>
                      <p className="text-left sm:text-base text-sm lg:mt-8">
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
                    <div className="flex flex-col ms-5 w-[80%]">
                      <h4 className="font-semibold text-left text-base lg:h-0 lg:text-lg">
                        Get paid{" "}
                      </h4>
                      <p className="text-left sm:text-base text-sm lg:mt-8">
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
              className="lg:ms-auto mx-auto mt-auto h-auto rounded-lg w-[499px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
