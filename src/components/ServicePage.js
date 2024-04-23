import React from "react";
import Header from "./Header";
import Services from "./Services";
import Footer from "./Footer";

const ServicePage = () => {
  return (
    <div>
      <Header />
      <div className="px-10 my-12 ">
        <Services />
      </div>
      <Footer />
    </div>
  );
};

export default ServicePage;
