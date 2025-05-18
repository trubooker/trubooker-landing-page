import ScrollAnimation from "@/components/Assets/FramerMotion/animate";
import Browse from "@/components/Browse";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import GetStarted from "@/components/GetStarted";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ServeConvenience from "@/components/Serve";
import StayOnTrack from "@/components/StayOnTrack";
import TripDetails from "@/components/TripDetails";
import React from "react";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <ScrollAnimation>
        <Hero />
      </ScrollAnimation>
      <ScrollAnimation>
        <Browse />
      </ScrollAnimation>
      <ScrollAnimation>
        <ServeConvenience />
      </ScrollAnimation>
      <ScrollAnimation>
        <TripDetails />
      </ScrollAnimation>
      <ScrollAnimation>
        <StayOnTrack />
      </ScrollAnimation>
      <FAQ />
      <GetStarted
        appstoreurl="https://apps.apple.com/ng/app/trubooker/id6743930941"
        playstoreurl="https://play.google.com/store/apps/details?id=com.trubooker.trubooker&hl=en"
      />
      <Footer />
    </div>
  );
}
