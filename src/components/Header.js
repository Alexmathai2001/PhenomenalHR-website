import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slidein from "./Slidein";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="p-6 h-20 bg-[#EAFFFD] flex justify-between items-center px-3 py-2 w-full relative"> {/* Added relative class */}
      <div className="flex items-center gap-3">
        <img alt="image" src="/images/logo.png" className="md:w-14 w-8"></img>
        <p className="font-semibold font-poppins text-sm lg:text-base">
          PHENOMENAL HR
        </p>
      </div>
      <div className={`gap-20 md:gap-6 font-poppins hidden md:flex`}>
        <Link
          to={"/"}
          className="font-semibold hover:text-[#00B8A2] hover:scale-110 transition duration-200 ease-in-out"
        >
          Home
        </Link>
        <Link
          to={"/services"}
          className="font-medium hover:text-[#00B8A2] hover:scale-110 transition duration-200 ease-in-out"
        >
          Service
        </Link>
        <Link
          to={"/aboutus"}
          className="font-medium hover:text-[#00B8A2] hover:scale-110 transition duration-200 ease-in-out"
        >
          About Us
        </Link>
        <Link
          to={"/contactus"}
          className="font-medium hover:text-[#00B8A2] hover:scale-110 transition duration-200 ease-in-out"
        >
          Contact Us
        </Link>
      </div>
      <button className="md:hidden" onClick={toggleMenu}>
        <span className="material-symbols-outlined">menu</span>
      </button>

      <Slidein />
    </div>
  );
};

export default Header;
