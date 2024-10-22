import Image from "next/image";
import React from "react";
import Account1 from "@/publicaccount1.svg";
import Account2 from "@/publicaccounts2.svg";

const Accounts = () => {
  return (
    <div>
      <div className="grid grid-rows-1 lg:grid-cols-2 mx-5 lg:mx-32 gap-8">
        <Image src={Account1} alt="" className="h-auto rounded-lg w-full" />
        <Image src={Account2} alt="" className="h-auto rounded-lg w-full" />
      </div>
    </div>
  );
};

export default Accounts;
