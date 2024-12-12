import FloatingAnnouncement from "@/components/(Driver)/FloatingAnnouncement";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PrivacyPolicy from "@/components/Policy";
import React from "react";

const Support = () => {
  return (
    <div>
      <Navbar />
      <PrivacyPolicy />
      <FloatingAnnouncement classname="bg-[#3A39CB]" />
      <Footer />
    </div>
  );
};

export default Support;
