import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';import { motion } from 'framer-motion';



function EmailJS() {
    const form = useRef();
    const [done, setDone] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_f5yfptg', 'template_xbc9oxc', form.current, 'X_z8mDvXj2tnwLoMb')
          .then((result) => {
              console.log(result.text);
              setDone(true);
            
          }, (error) => {
              console.log(error.text);
          });
      };
      
  return (
    <div className='lg:flex-1 lg:pt-32 px-72'>
    <h1 className='h1'>Contact me</h1>
    <p className='mb-12'>I would love to get suggestions from you.</p>
    {/* form */}
    <form ref={form} className='flex flex-col gap-y-4'onSubmit={sendEmail} >
      <div className='flex gap-x-10'>
        <input
          className='outline-none border-b border-b-blue-500 h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
          type='text'
          placeholder='Your name' name="user_name"
        />
        <input
          className='outline-none border-b border-b-blue-500 h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
          type='text'
          placeholder='Your email address' name="user_email"
        />
      </div>
      <input
        className='outline-none border-b border-b-blue-500 h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
        type='text'
        placeholder='Your message' name="message"
        />
        <span>{done && "Thanks for Contacting me"}</span>
      <button className='btn mb-[30px] mx-auto lg:mx-0 self-start'>
        Send it
      </button>
    </form>
  </div>
  )
}

export default EmailJS

