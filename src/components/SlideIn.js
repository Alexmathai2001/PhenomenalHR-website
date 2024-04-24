import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SlideIn = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#EAFFFD] shadow-lg z-50 overflow-y-auto">
        <div className="p-6 w-full">
          <div className="flex justify-between items-center  mb-6 ">

          <h2 className="text-xl font-semibold">Menu</h2>
          <button>
          <span className="material-symbols-outlined">close</span>
          </button>
          </div>
          <div className="flex flex-col gap-3">
            <Link to={'/'} className="block w-full bg-[#00B8A2] text-center font-semibold text-white py-2 px-3 rounded-lg">Home</Link>
            <Link to={'/services'} className="block w-full bg-[#00B8A2] text-center font-semibold  text-white py-2 px-3 rounded-lg">Services</Link>
            <Link to={'/aboutus'} className="block w-full bg-[#00B8A2] text-center font-semibold  text-white py-2 px-3 rounded-lg">About Us</Link>
            <Link to={'/contactus'} className="block w-full bg-[#00B8A2] text-center font-semibold  text-white py-2 px-3 rounded-lg">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

SlideIn.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SlideIn;
