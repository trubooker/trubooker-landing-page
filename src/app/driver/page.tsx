import Accounts from "@/components/(Driver)/Accounts";
import FloatingAnnouncement from "@/components/(Driver)/FloatingAnnouncement";
import Hero from "@/components/(Driver)/Hero";
import HowItWorks from "@/components/(Driver)/HowItWorks";
import WhyUs from "@/components/(Driver)/WhyUs";
import ScrollAnimation from "@/components/Assets/FramerMotion/animate";
import Footer from "@/components/Footer";
import GetStarted from "@/components/GetStarted";
import Navbar from "@/components/Navbar";
import React from "react";

const Driver = () => {
  return (
    <div>
      <FloatingAnnouncement />
      <Navbar />
      <ScrollAnimation>
        <Hero />
      </ScrollAnimation>
      <ScrollAnimation>
        <WhyUs />
      </ScrollAnimation>
      <ScrollAnimation>
        <HowItWorks />
      </ScrollAnimation>
      <ScrollAnimation>
        <Accounts />
      </ScrollAnimation>
      <GetStarted />
      <Footer />
    </div>
  );
};

export default Driver;
