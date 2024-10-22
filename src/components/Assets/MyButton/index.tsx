"use client";

import React from "react";
import { Button } from "../../ui/button";
import { useRouter } from "next/navigation";

interface ButtonProps {
  link: string;
  classname: string;
  content: string | any;
}

const ButtonComponent: React.FC<ButtonProps> = ({
  classname,
  content,
  link,
}) => {
  const router = useRouter();
  return (
    <div>
      <Button
        onClick={() => router.push(`${link}`)}
        variant={"outline"}
        className={`bg-[--primary] hover:bg-[--primary-btn] font-bold text-white hover:scale-105 duration-300 hover:text-white rounded-full p-5 my-[12px] ${classname}`}
      >
        {content}
      </Button>
    </div>
  );
};

export default ButtonComponent;
