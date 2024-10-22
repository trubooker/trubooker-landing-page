"use client";

import React from "react";
import { Bell, CircleUser, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import NavbarRoutes from "../Routes";
import { NavLinks } from "@/constants";
import Logo from "@/public/logo.svg";
import LogoDriver from "@/publiclogoDrivers.svg";

const MobileNavbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className="flex items-center my-2 lg:my-5 w-full">
      <div className="flex justify-between items-center w-full">
        <Image
          src={pathname === "/driver" ? LogoDriver : Logo}
          width="60"
          alt="Logo"
          className="lg:hidden flex w-32 h-10"
        />
        <Image
          src={pathname === "/driver" ? LogoDriver : Logo}
          width="100"
          alt="Logo"
          className="lg:flex hidden w-52 h-16"
        />
        <div className="lg:flex gap-x-5 items-center hidden">
          {NavLinks.map((link: any, index: number) => (
            <NavbarRoutes
              key={index}
              content={link.title}
              href={link.path}
              className="text-[#667085]"
            />
          ))}
          <Link
            className="hover:underline font-medium text-[--primary-orange]"
            href={pathname === "/driver" ? "/" : "/driver"}
          >
            {pathname === "/driver"
              ? "Ride with trubooker"
              : "Drive with trubooker"}
          </Link>
          <Button
            onClick={() => router.push("")}
            variant={"outline"}
            className="bg-[--primary] hover:bg-[--primary-btn] font-bold text-white hover:text-white rounded-full p-5 my-[12px]"
          >
            Login/Signup as an agent
          </Button>
        </div>
        <div className="flex items-center overflow-y-auto gap-x-5 lg:hidden">
          <div>
            <Sheet>
              <SheetTrigger
                asChild
                className="rounded-full m-2 border border-white shadow-md"
              >
                <button className=" p-2 rounded-full items-center text-gray-500">
                  <Menu className="h-7 w-7 cursor-pointer" />
                </button>
              </SheetTrigger>

              <SheetContent side="left" className="flex flex-col">
                <div className="flex flex-col gap-y-4">
                  <div className="relative w-32 h-10 pb-2">
                    <Image
                      className="sm:mx-0 mt-1 rounded lg:hidden"
                      src={pathname === "/driver" ? LogoDriver : Logo}
                      fill
                      alt=""
                    />
                  </div>
                  <>
                    <nav className="flex flex-col gap-y-3 pt-3 items-start text-sm font-medium lg:px-4">
                      <SheetClose className="w-full">
                        <>
                          {NavLinks.map((link: any, index: number) => (
                            <>
                              <Button
                                key={index}
                                variant={"outline"}
                                onClick={() => router.push(`${link.path}`)}
                                className={`${
                                  pathname === `${link.path}`
                                    ? " bg-[#F0F2F5] rounded-[12px]"
                                    : "hover:bg-[#FFFBF4]"
                                } transition duration-300 text-left flex items-center my-5 w-full gap-3 rounded-lg px-3 py-5`}
                              >
                                <span className="text-left me-auto flex gap-3">
                                  {link.title}
                                </span>
                              </Button>
                            </>
                          ))}

                          <Button
                            onClick={() =>
                              router.push(
                                pathname === "/driver" ? "/" : "/driver"
                              )
                            }
                            variant={"outline"}
                            className="w-full mb-[12px] py-5 text-[--primary-orange] hover:text-[--primary-orange]"
                          >
                            {pathname === "/driver"
                              ? "Ride with trubooker"
                              : "Drive with trubooker"}
                          </Button>

                          <Button
                            onClick={() => router.push("")}
                            variant={"outline"}
                            className="bg-[--primary] hover:bg-[--primary-btn] text-white hover:text-white rounded-lg p-5 my-[12px]"
                          >
                            Login/Signup as an agent
                          </Button>
                        </>
                      </SheetClose>
                    </nav>
                  </>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
