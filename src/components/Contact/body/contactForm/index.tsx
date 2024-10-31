"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Send from "./Mail";
import { useState } from "react";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const contactFormSchema = z.object({
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    email: z
      .string()
      .email({ message: "Email is invalid" })
      .min(1, { message: "Email is required" }),
    message: z.string().min(10, { message: "Message is required" }),
    subject: z.string().min(10, { message: "Message is required" }),
  });

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      subject: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
    setIsLoading(true);
    try {
      await Send({ ...values });

      alert("Email sent successfully!");
      setIsLoading(false);
    } catch (error) {
      console.log("Failed to send email:", error);
      alert("Failed to send email");
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full my-10 xl:m-0 xl:pe-10 montserrat">
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-rows-none space-y-8 xl:space-y-0 gap-x-2 xl:grid-cols-2 xl:justify-between w-full">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input className="h-10" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input className="h-10" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* <div className="grid grid-rows-none space-y-8 xl:space-y-0 gap-x-2 xl:grid-cols-2 xl:justify-between w-full"></div> */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input className="h-10" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input className="h-10" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Write your message" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full text-right">
              <Button
                disabled={isLoading}
                className="bg-[--primary] hover:bg-[--primary-btn] w-[195px] h-[44px] rounded px-4 gap-2"
                type="submit"
              >
                {isLoading ? "Sending..." : "Send message"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
