import React from "react";
import MobileNavbar from "./Header";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center gap-4 px-4 lg:px-6">
      <MobileNavbar />
    </header>
  );
};

export default Navbar;
