/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import gambar from '../asset/FOTO.jpg'

import {TypeAnimation} from 'react-type-animation'

import {motion} from 'framer-motion'
import {fadeIn} from '../Efek'


function Hero() {
  return (
    <div className=" flex items-center pb-20 justify-center w-full  z-0 ">
  <div className="pt-32 pb-20 flex w-full flex-col items-center lg:flex-row px-4 py-4 bg-hero lg:justify-start
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
      className='md:px-20 pt-10 pb-10 text-4xl font-bold text-black'
      initial="hidden"
      whileInView={'show'}
      viewport={{once:false, amount:0.7}}>Selamat Datang di Web Saya
      </h1>
      <div
      variants={fadeIn('up',0.5)}
      initial="hidden"
      whileInView={'show'}
      viewport={{once:false, amount:0.7}}
      >
      <span className='md:pl-20 text-3xl pb-5 text-black'>Sedang Belajar  </span>
      <TypeAnimation sequence={["Front End ", 2000, "Beck End", 2000, "Database",2000]}  speed={50} wrapper='span' repeat={Infinity} className='text-3xl text-red-400 font-bold'/>  
      <p className="py-6 md:px-20 text-black">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      </div>
      
    </motion.div>
  </div>
</div>
  )
}

export default Hero
