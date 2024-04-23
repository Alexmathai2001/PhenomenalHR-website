import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("mleqaopy");
  if (state.succeeded) {
      return <p className='bg-[#EAFFFD] px-4 py-2'>Thanks for your Message!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
      <input
      className='bg-[#EAFFFD] text-sm px-3 outline-none w-64 sm:w-full py-2 block'
      placeholder='Enter your Name'
        id="name"
        type="text" 
        name="name"
      />
      <input
      placeholder='E-mail'
      className='bg-[#EAFFFD] text-sm px-3 outline-none w-64 sm:w-full py-2 block mt-4'
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      
      <input
      placeholder='Subject'
      className='bg-[#EAFFFD] text-sm px-3 outline-none sm:w-full w-64 py-2 block mt-4'
        id="subject"
        type="text" 
        name="subject"
      />
      <textarea
      className='bg-[#EAFFFD] text-sm px-3 outline-none w-full  py-2 block mt-4'
        id="message"
        name="message"
        placeholder='Enter your Message here'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" className=' flex justify-center w-full my-5 bg-[#00B8A2] px-4 py-2 rounded-lg text-white font-medium' disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default ContactForm