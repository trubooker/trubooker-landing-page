import React from "react";
import MobileNavbar from "./Header";

const Navbar = () => {
  return (
    <header className="z-50 flex items-center gap-4 px-5 lg:px-20">
      <MobileNavbar />
    </header>
  );
};

export default Navbar;
