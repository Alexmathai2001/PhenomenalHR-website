import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { data } from '../constants'

const FAQ = () => {

  const [faq,setFaq] = useState(data)

  return (
    <div className="px-10 font-poppins w-full lg:flex my-20">
      <div className="lg:w-4/12 w-full flex justify-center">
        <p className=" text-3xl w-8/12 flex justify-center text-center font-medium text-[#FD6B75]">
          Frequently Asked Questions
        </p>
      </div>

      <div className="lg:w-6/12 w-full mt-10 flex justify-center">
        <div>
          {faq.map((data,index) => (

          <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            {data.question}
          </AccordionSummary>
          <AccordionDetails>
          {data.answer}
          </AccordionDetails>
        </Accordion>

          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
