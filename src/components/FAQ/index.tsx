import { IFAQ } from "@/constants";
import React from "react";
import ButtonComponent from "../Assets/MyButton";

const FAQ = () => {
  return (
    <div className="my-14 lg:my-20  mx-5 lg:mx-32">
      <h3 className="flex flex-col mb-3 mt-5">
        <span className="font-extrabold text-[--primary] text-3xl mb-2">
          FAQ
        </span>
        <span className="lg:text-base text-sm">
          All details about the item and its function can be found here.
          Can&apos;t locate the solution you desire? Reach out to our crew!
        </span>
      </h3>

      <div className="grid lg:grid-cols-3 my-10 lg:my-16 w-full gap-10">
        {IFAQ.map((item: any, index: number) => (
          <div key={index} className="rounded-2xl w-full">
            <div>
              <h1 className="font-bold lg:text-base text-sm mb-2">
                {item.header}
              </h1>
              <p className="font-light lg:text-base text-sm ">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div>
          <h1 className="font-bold lg:text-3xl text-xl mb-2">
            Still got questions?
          </h1>
          <p className="font-light lg:text-base text-sm ">
            If you don&apos;t find an answer to your question, contact us, and
            our team will get in touch with you.
          </p>
        </div>
        <div>
          <ButtonComponent link={""} classname={""} content={"Get in touch"} />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
