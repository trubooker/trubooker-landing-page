"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Form,
  FormControl,
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
import { format } from "date-fns";
import axios from "axios";

const FormSchema = z.object({
  email: z
    .string()
    .email({ message: "Email is invalid" })
    .min(1, { message: "Email is required" }),
  password: z
    .string()
    .min(8, { message: "Password must be 8 characters or more" }),
  reason: z
    .string()
    .min(10, { message: "Field is requires, minimum 10 characters" }),
});

const AccountDelete = () => {
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
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [dobError, setDobError] = useState("");
  const [reasonError, setReasonError] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleBack = () => {
    router.back();
  };

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setIsLoading(true);
    try {
      if (selectedDate) {
        const dateString = format(selectedDate, "dd/MM/yyyy");
        const formdata = {
          reason: data?.reason,
          email: data?.email,
          password: data?.password,
          dob: dateString,
        };
        const resdata = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/delete-user-account`,
          formdata
        );

        if (resdata?.status === 201 || resdata?.status === 200) {
          console.log(resdata);
          toast.success("Account deleted successfully");
          setIsLoading(false);
        }
      } else {
        setDobError("Date of birth is required");
        setIsLoading(false);
      }
    } catch (error: any) {
      console.log(error);
      setEmailError(
        error?.response?.data?.errors?.email?.map((err: any) => err)
      );
      setPasswordError(
        error?.response?.data?.errors?.password?.map((err: any) => err)
      );
      setDobError(error?.response?.data?.errors?.dob?.map((err: any) => err));
      setReasonError(
        error?.response?.data?.errors?.reason?.map((err: any) => err)
      );
      if (error?.response?.data?.error?.message) {
        toast.error(error?.response?.data?.error?.message);
      }
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="grid lg:flex lg:flex-row grid-cols-1 lg:h-screen gap-y-5 h-full">
        <button
          onClick={handleBack}
          className="text-gray-500 fixed top-7 left-8 z-20 bg-white h-10 w-10 rounded-full flex items-center justify-center shadow-lg"
        >
          <IoChevronBackOutline className="h-6 w-6 text-gray-800" />
        </button>

        <div className="relative w-full lg:h-screen h-40 overflow-hidden">
          {/* Background Images */}
          <div className="absolute inset-0 ">
            <div className="fade1-background absolute inset-0 z-0"></div>
          </div>

          {/* CTA Section */}
          <div className="absolute inset-0 z-10 flex items-center justify-center"></div>
        </div>
        <div className="w-full h-full lg:flex lg:flex-col text-center justify-center overflow-y-auto ">
          <div className="w-full lg:w-10/12 lg:my-20 my-4 mx-auto">
            <div className="flex items-center justify-center lg:mt-48 mb-5">
              <Image src={Logo} width="100" alt="Logo" />
            </div>

            <div className="relative w-11/12 mx-auto mb-10">
              <div className="text-center">
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
                      You will no longer be able to log in to the TruBooker app.
                    </li>
                    <li>
                      You will no longer receive gains on completed trips as a
                      driver.
                    </li>
                    <li>
                      Earned royalties from referred drivers will be permanently
                      held back.
                    </li>
                    <li>
                      You will no longer receive updates on latest additions to
                      TruBooker.
                    </li>
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
                          <div className="grid gap-2 text-gray-500">
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
                                        type={
                                          showPassword ? "text" : "password"
                                        }
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

                          <div className="grid gap-2 text-gray-500">
                            <FormItem>
                              <FormLabel htmlFor="dateInput">
                                Select a date:
                              </FormLabel>

                              <div className="border border-gray-200 p-2 rounded-lg flex flex-col">
                                <DatePicker
                                  selected={selectedDate}
                                  onChange={(date: Date | null) =>
                                    setSelectedDate(date)
                                  }
                                  dateFormat="yyyy-MM-dd"
                                  placeholderText="YYYY-MM-DD"
                                  id="dateInput"
                                  className="date-picker-input border-none w-full outline-none h-6 pl-3 text-base py-4 placeholder:text-sm"
                                />
                              </div>
                            </FormItem>
                            {!dobError ? <FormMessage /> : ""}
                            {dobError ? (
                              <FormMessage className="mt-2 text-red-500">
                                {dobError}
                              </FormMessage>
                            ) : (
                              ""
                            )}
                          </div>

                          <div className="w-full text-gray-500">
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
                                  {!reasonError ? <FormMessage /> : ""}
                                  {reasonError && (
                                    <FormMessage>{reasonError}</FormMessage>
                                  )}
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
        </div>
      </section>
    </>
  );
};

export default AccountDelete;
