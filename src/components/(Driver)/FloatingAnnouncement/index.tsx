import { DrawerDialogDemo } from "@/components/Assets/Modal";
import ButtonComponent from "@/components/Assets/MyButton";
import React from "react";

interface FloatingProp {
  classname: string;
}

const FloatingAnnouncement = ({ classname }: FloatingProp) => {
  return (
    <div>
      {" "}
      <div className="text-center">
        <div
          className={`w-full ${classname} font-semibold text-sm lg:text-base flex flex-col lg:flex-row py-2 lg:py-0 lg:justify-around text-white justify-center text-center`}
        >
          <p className="my-auto">
            Join our waiting list to earn as a driver when we launch
          </p>
          <div className="text-center">
            <DrawerDialogDemo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingAnnouncement;
