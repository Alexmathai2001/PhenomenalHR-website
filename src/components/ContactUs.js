import React from "react";
import Form from './Form'

const ContactUs = () => {
  return (
    <div className="font-poppins">
      <p className="flex justify-center text-xl xl:text-3xl font-semibold text-[#00B8A2]">
        Contact Us
      </p>
      <div className="my-5 px-10 md:flex justify-around items-center" >
        {/* left */}
        <div className="lg:w-4/12 flex justify-center">
          <div>
          <p className="font-medium mb-3">Get in touch</p>
          {/* email */}
          <div className="flex items-center gap-3">
            <span class="material-symbols-outlined text-[#00B8A2] p-6 bg-[#EAFFFD] text-3xl">mail</span>
            <div>
              <p className="font-medium">Email</p>
              <p className="font-light text-sm text-gray-700">anju@phenomenalhr.com</p>
            </div>
          </div>
          {/* Phone */}
          <div className="flex items-center gap-3 mt-4">
            <span class="material-symbols-outlined text-[#00B8A2] p-6 bg-[#EAFFFD] text-3xl">phone</span>
            <div>
              <p className="font-medium">Phone</p>
              <p className="font-light text-sm text-gray-700">+91 97469 09992</p>
            </div>
          </div>
          </div>
        </div>
        
        {/* right */}
        <div className="lg:w-8/12 flex justify-center">
            <div className="border-2 rounded-lg border-green-800 p-5 lg:w-2/3 mt-10 ">
            <Form />
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
