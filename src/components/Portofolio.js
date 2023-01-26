import React from 'react'
import harisenin from '../asset/harisenin.png'
import ecom1 from "../asset/ecom1.png"
import ecom2 from "../asset/ecom2.png"
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import {fadeIn} from '../Efek'

function Portofolio() {
  return (
  <motion.div 
  variants={fadeIn('up',0.5)}
  initial="hidden"
  whileInView={'show'}
  className='flex flex-col justify-center '>
    <div className='text-3xl font-semibold justify-center md:justify-start lg:pl-[13rem] flex items-center pl-4'>
            Portofolio
        </div>
    <div className='flex flex-col md:flex-row items-center justify-center py-10 gap-2 px-4 lg:gap-10'>
        <div className="card w-80 lg:w-1/4 bg-base-100 shadow-xl hover:scale-95">
          <figure><img className='w-[20rem] lg:w-full ' src={ecom2} alt="" /></figure>
            <div className="card-body">
            <a href="https://ecome-tailwind1.vercel.app/" className='text-xl font-semibold' target="_blank" rel="noreferrer">
            E-Commerce 1
            </a>
            <p>Mencoba membuat Web e-commerce</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">HTML&CSS</div> 
              <div className="badge badge-outline">Tailwind</div>
              <div className="badge badge-outline">React</div>
            </div>
           </div>
        </div>
        <div className="card lg:w-1/4 bg-base-100 shadow-xl hover:scale-95">
          <figure><img className='w-[20rem] lg:w-full' src={harisenin} alt="" /></figure>
            <div className="card-body">
            <a href="https://tugas-tailwindcss.vercel.app/" target="_blank" className='text-xl font-semibold' rel="noreferrer">
            Harisenin.com
            </a>
            <p>Tugas HTML, CSS & JS Harisenin.com</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">HTML&CSS</div> 
              <div className="badge badge-outline">JS</div>
            </div>
           </div>
        </div>
        <div className="card lg:w-1/4 bg-base-100 shadow-xl hover:scale-95">
          <figure><img className='w-[20rem] lg:w-full hover:scale-125' src={ecom1} alt="" /></figure>
            <div className="card-body">
            <a href="https://ecomlagi.vercel.app/" className='text-xl font-semibold' target="_blank" rel="noreferrer">
            E-Commerce 2
            </a>
            <p>Mencoba membuat Web e-commerce</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">HTML&CSS</div> 
              <div className="badge badge-outline">Tailwind</div>
              <div className="badge badge-outline">React</div>
            </div>
           </div>
        </div>
    </div>
    <Link to={"/portofolio/"} className='flex items-center justify-center pb-9'>
      <button className="btn btn-wide hover:shadow-lg ">Lebih Banyak</button>
    </Link>
    </motion.div>
  )
}

export default Portofolio
