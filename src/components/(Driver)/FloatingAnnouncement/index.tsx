import ButtonComponent from "@/components/Assets/MyButton";
import React from "react";

const FloatingAnnouncement = () => {
  return (
    <div>
      {" "}
      <div className="text-center">
        <div className="w-full bg-[--primary] font-semibold text-base flex justify-around  text-white text-center">
          <p className="my-auto">
            Join our waiting list to earn as a driver when we launch
          </p>
          <ButtonComponent
            link={""}
            classname={"bg-white text-black hover:bg-white hover:text-black"}
            content={"Join waitlist"}
          />
        </div>
      </div>
    </div>
  );
};

export default FloatingAnnouncement;
