/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import gambar from '../asset/FOTO.jpg'
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'
import {fadeIn} from '../Efek'
import github from '../asset/github.png'



function Hero() {
  const [display, setDisplay] = useState(false);
  const showPorto = () => {
    setDisplay((prev) => !prev);
  };

  return (
    <div className="hero min-h-screen bg-base-200 bg-hero bg-center bg-auto bg-repeat">
       <div className="flex w-full flex-col items-center lg:flex-row px-4 py-4  lg:justify-start
        lg:px-[13rem] " >
          <motion.img
          variants={fadeIn('up',0.5)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once:false, amount:0.7}} src={gambar} className="w-[20rem] rounded-lg shadow-2xl " />
          <motion.div
          variants={fadeIn('up',0.5)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once:false, amount:0.7}}>
            <h1 
            variants={fadeIn('up',0.5)}
            className='md:px-20 pt-10 pb-3 text-2xl font-semibold text-black'
            initial="hidden"
            whileInView={'show'}
            viewport={{once:false, amount:0.7}}>Halo! My Name is
            </h1>
            <div
            variants={fadeIn('up',0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once:false, amount:0.7}}
            >
            <span className='md:pl-20 text-3xl pb-5 text-black'></span>
            <span className="relative"></span>
            <span className="text-blue-500 text-3xl md:text-5xl font-bold inline-flex h-20 pt-2 overflow-x-hidden animate-type-reverse whitespace-nowrap will-change-transform">
            Riva Bayu Syarifudin
            </span>
            <span className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-secondary md:-mb-4 md:h-16 animate-cursor will-change-transform"></span> 
  
            <div className="md:pl-20">
            <Link to='/portofolio/'>
            <button
            className="bg-blue-500 py-3 px-4 font-medium rounded-lg text-white hover:scale-110"
          >
            {!display && "My Project"}
          </button>
            </Link>
              {!display && (
              <button className="border-blue-500 border font-medium rounded-lg text-blue-500 ml-3 hover:scale-110">
                <a
                  href="https://github.com/rivabayu"
                  className="flex gap-3 items-center py-3 px-4"
                  target='_blank'
                >
                  Github
                </a>
              </button>
            )}
            </div>
            </div>
          </motion.div>
      </div>
</div>
  )
}

export default Hero
