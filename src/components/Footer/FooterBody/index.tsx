import React from "react";
import Image from "next/image";
import { FooterLinks } from "@/constants";
import Link from "next/link";
import Logo from "@/publiclogoWhite.svg";
import { usePathname } from "next/navigation";

const FooterBody = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="mx-5 sm:mx-14 text-sm sm:text-base grid text-white grid-cols-1 gap-x-8 gap-y-16 pb-10 py-10 px-10  xl:text-left lg:grid-cols-4 ">
        <div className="max-w-xl lg:max-w-lg">
          <Link href={"/"}>
            <Image
              src={Logo}
              width="90"
              alt="Logo"
              className="flex w-44 h-20"
            />
          </Link>
        </div>
        {FooterLinks.map((link) => (
          <div key={link.header} className="">
            <h3 className="font-bold pb-3 pt-2">{link.header}</h3>
            <div className="my-5 flex flex-col">
              {link.links.map((items) => (
                <div
                  className="gap-x-2 mb-5 font-normal text-sm xl:text-base"
                  key={items.title}
                >
                  <Link href={items.path}>{items.title}</Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FooterBody;
