"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const FormSchema = z.object({
  email: z
    .string()
    .email({ message: "Email is invalid" })
    .min(1, { message: "Email is required" }),
  password: z
    .string()
    .min(8, { message: "Password must be 8 characters or more" }),
  reason: z.string().min(10, { message: "Field is required" }),
});

const DriverAccountDelete = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {},
  });
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [loading, setLoading] = useState(false); // Loading state for button
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const handleBack = () => {
    router.back();
  };

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {};

  return (
    <>
      <section className="grid lg:flex lg:flex-row grid-cols-1 gap-y-5 h-full">
        <button
          onClick={handleBack}
          className="text-gray-500 fixed top-7 left-8 z-20 bg-white h-10 w-10 rounded-full flex items-center justify-center shadow-lg"
        >
          <IoChevronBackOutline className="h-6 w-6 text-gray-800" />
        </button>

        <div className="relative w-full lg:h-screen h-40 overflow-hidden">
          {/* Background Images */}
          <div className="absolute inset-0 ">
            <div className="fade2-background absolute inset-0 z-0"></div>
          </div>

          {/* CTA Section */}
          <div className="absolute inset-0 z-10 flex items-center justify-center"></div>
        </div>

        <div className="w-full lg:h-screen lg:flex lg:flex-col text-center justify-center overflow-y-auto ">
          <div className="relative mb-8 mt-6 lg:w-10/12 w-11/12 mx-auto">
            <div className="relative w-[150px] h-[30px] items-center flex justify-center text-center mt-5 mx-auto">
              <Image src={Logo} alt="Logo" fill className="mx-auto w-full" />
            </div>
            <div className="text-center mx-auto">
              <div className="w-full text-left bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 text-center">
                  Do you want to delete your account?
                </h2>
                <p className="mt-4 text-sm text-gray-600">
                  We&apos;re sorry to see you go. <br />
                  Please note, once your account is deleted:
                </p>
                <ul className="mt-2 text-sm text-gray-600 text-justify list-disc list-inside space-y-1">
                  <li>
                    You will no longer be able to log in to the TruBooker Driver
                    app.
                  </li>
                  <li>
                    You will no longer receive updates via sms or newsletter on
                    latest additions to TruBooker.
                  </li>
                  <li>Trip histories and aquired coupons will be erased</li>

                  <li>
                    You will no longer be able to log in to the TruBooker app.
                  </li>
                  <li>
                    You will no longer receive updates on
                    latest additions to TruBooker.
                  </li>
                  <li>Trip histories and aquired coupons will be erased</li>
                </ul>
                <p className="mt-4 text-sm text-gray-600">
                  Please enter your account details:
                </p>
              </div>
            </div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex transition-transform text-left duration-500 ease-in-out">
                  <div className="w-full flex-shrink-0">
                    <div>
                      <div className="space-y-2 mt-4">
                        <div className="grid gap-2">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Account Email</FormLabel>
                                <FormControl>
                                  <Input
                                    id="email"
                                    type="email"
                                    {...field}
                                    className="py-6"
                                  />
                                </FormControl>
                                {!emailError ? <FormMessage /> : ""}
                                {emailError && (
                                  <FormMessage>{emailError}</FormMessage>
                                )}
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="grid gap-2 text-gray-500">
                          <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel htmlFor="password">
                                  Account Password
                                </FormLabel>
                                <FormControl>
                                  <div className="relative">
                                    <Input
                                      id="password"
                                      type={showPassword ? "text" : "password"}
                                      {...field}
                                      className="py-6"
                                    />

                                    <button
                                      type="button"
                                      onClick={togglePasswordVisibility}
                                      className="text-xs font-semibold underline absolute right-4 top-4"
                                    >
                                      {showPassword ? (
                                        <FaEyeSlash className="w-4 h-4" />
                                      ) : (
                                        <FaEye className="w-4 h-4" />
                                      )}
                                    </button>
                                  </div>
                                </FormControl>
                                {!passwordError ? <FormMessage /> : ""}
                                {passwordError && (
                                  <FormMessage>{passwordError}</FormMessage>
                                )}
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="w-full">
                          <FormLabel className="text-left text-sm text-gray-500 ">
                            Reason
                          </FormLabel>
                          <FormField
                            control={form.control}
                            name="reason"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Textarea
                                    className="resize-none min-h-[100px]"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-3 mt-4">
                      <Button
                        type="submit"
                        className="bg-[--primary-btn] hover:bg-[--primary] text-white w-full py-4 text-base font-semibold"
                      >
                        {isLoading ? "Submiting..." : "Submit"}
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
};

export default DriverAccountDelete;