import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { data } from '../constants'

const FAQ = () => {

  const [faq,setFaq] = useState(data)

  return (
    <div className="px-10 font-poppins w-full mb-20 xl:flex xl:flex-col xl:items-center">
      <p className="flex justify-center text-2xl lg:text-4xl font-semibold text-[#00B8A2] xl:my-10">Want to know more?</p>
      

      <div className=" xl:w-1/2 mt-10 flex justify-center">
        <div>
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
    </div>
  );
};

export default FAQ;
