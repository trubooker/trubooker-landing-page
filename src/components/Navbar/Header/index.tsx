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
import { Separator } from "@/components/ui/separator";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdAccountCircle } from "react-icons/md";
import NavbarRoutes from "../Routes";
import { NavLinks } from "@/constants";

const MobileNavbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className="flex items-center w-full">
      <div className="flex items-center overflow-y-auto gap-x-5">
        <div>
          <Sheet>
            <SheetTrigger asChild className="rounded-full me-2 border">
              <button className="lg:hidden p-1 rounded-full  items-center text-gray-500">
                <Menu className="h-7 w-7 cursor-pointer" />
              </button>
            </SheetTrigger>

            <SheetContent side="left" className="flex flex-col">
              <div className="flex flex-col gap-y-4">
                <div className="relative w-32 h-10 pb-2">
                  <Image
                    className="sm:mx-0 mt-1 bg-black rounded lg:hidden"
                    src={"/logoNoBackground.png"}
                    fill
                    alt=""
                  />
                </div>
                <>
                  <nav className="flex flex-col gap-y-3 pt-3 items-start text-sm font-medium lg:px-4">
                    <SheetClose className="w-full">
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
                            } transition duration-300 text-left flex items-center my-5 w-full gap-3 rounded-lg px-3 py-2`}
                          >
                            <span className="text-left me-auto flex gap-3">
                              {link.title}
                            </span>
                          </Button>
                        </>
                      ))}
                    </SheetClose>
                  </nav>
                </>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <div className="flex lg:justify-between justify-end w-full">
        <div className="lg:flex gap-x-3 items-center hidden">
          {NavLinks.map((link: any, index: number) => (
            <NavbarRoutes
              key={index}
              content={link.title}
              href={link.path}
              className="text-black"
            />
          ))}
        </div>
        <div className="flex gap-x-2 ps-4 rounded-full items-center border">
          <Button
            size="icon"
            variant={"ghost"}
            className="h-5 w-5 rounded-full"
          >
            <Bell className="h-5 w-5" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
