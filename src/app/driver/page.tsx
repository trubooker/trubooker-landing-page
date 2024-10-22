import Accounts from "@/components/(Driver)/Accounts";
import FloatingAnnouncement from "@/components/(Driver)/FloatingAnnouncement";
import Hero from "@/components/(Driver)/Hero";
import HowItWorks from "@/components/(Driver)/HowItWorks";
import WhyUs from "@/components/(Driver)/WhyUs";
import Footer from "@/components/Footer";
import GetStarted from "@/components/GetStarted";
import Navbar from "@/components/Navbar";
import React from "react";

const Driver = () => {
  return (
    <div>
      <FloatingAnnouncement />
      <Navbar />
      <Hero />
      <WhyUs />
      <HowItWorks />
      <Accounts />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default Driver;
