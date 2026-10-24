import Image from "next/image";
import React from "react";

interface CarouselLayoutProps {
  content: string;
  icon: string;
  header: string;
}

const Structure: React.FC<CarouselLayoutProps> = ({
  icon,
  content,
  header,
}) => {
  return (
    <div className="w-full shadow-2xl rounded-2xl">
      <div className=" w-full p-3 text-left ">
        <div className="rounded-xl items-start p-4 w-full ">
          <div className={`mb-10`}>
            <div className="relative w-[30px] lg:w-[40px] h-[30px] lg:h-[40px]">
              <Image className="" src={icon} alt="" fill />
            </div>
          </div>

          <div className="text-default_black-1">
            <h1 className="font-bold text-xl lg:mb-2">{header}</h1>
            <p className={`font-light text-base w-full`}>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Structure;
