import React from 'react'
import harisenin from '../asset/harisenin.png'
import webprofil from "../asset/webprofil.png"
import ecom1 from "../asset/ecom1.png"
import ecom2 from "../asset/ecom2.png"
import css3 from "../asset/css3.png"
import html5 from "../asset/html5.png"
import reactjjs from "../asset/reactjs.png"
import tailwindimg from "../asset/tailwindcss.png"
import bootstap from "../asset/bootstrap.png"

import {motion} from 'framer-motion'
import {fadeIn} from '../Efek'


const portofolio = [
    {
        name : 'Harisenin.com',
        description : ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        link : 'https://tugas-tailwindcss.vercel.app/',
        gambar : harisenin,
        tekno1 : css3,
        tekno2 : html5,
        tekno3 : tailwindimg,
        tekno4 : reactjjs,
    },
    {
        name : 'E-Commers 1',
        description : ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        link : 'https://ecomlagi.vercel.app/',
        gambar : ecom2,
        tekno1 : css3,
        tekno2 : html5,
        tekno3 : tailwindimg,
        tekno4 : reactjjs,
    },
    {
        name : 'E-commers 2',
        description : ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        link : 'https://ecome-tailwind1.vercel.app/',
        gambar : ecom1,
        tekno1 : css3,
        tekno2 : html5,
        tekno3 : tailwindimg,
        tekno4 : reactjjs,
    },
    {
        name : 'Web Portofolio 1',
        description : ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        link : 'Kunjungi Halaman',
        gambar : webprofil,
        tekno1 : css3,
        tekno2 : html5,
        tekno3 : bootstap,
        tekno4 : reactjjs
    },
    
]

function Projek() {
  return (
    <div className='mt-40 mb-20'>
        {portofolio.map((portofolio, index) => { 
            const {name, description, link, gambar, tekno1, tekno2, tekno3, tekno4} = portofolio; 
            return <motion.div 
            variants={fadeIn('up',0.5)}
            initial="hidden"
            whileInView={'show'}
            key={index} className="mt-20 flex flex-col lg:flex-row items-center justify-center bg-base-100 shadow-xl mx-20 rounded-2xl ">
            <figure><img src={gambar} className="hover:scale-105 rounded-xl md:w-[50rem] lg:w-[150em] " alt="Album"/></figure>
            <div className="card-body">
                <div className="text-2xl font-semibold">{name}</div>
                <p>{description}</p>
                <div className='flex flex-col'>
                    <div className='text-xl font-semibold pt-4'>Teknologi yang digunakan</div>
                    <div className='flex flex-row'>
                        <img className='w-14 h-14' src={tekno2} alt=""/>
                        <img className='w-14 h-14' src={tekno1} alt=""/>
                        <img className='pt-2 pl-2 w-14 h-14' src={tekno3} alt=""/>
                        <img className='pt-2 pl-2 w-14 h-14' src={tekno4} alt=""/>
                    </div>
                </div>
                <a href={link} target="_blank" className="card-actions justify-end" rel="noreferrer">
                <button className="btn">Kunjungi</button>
                </a>
            </div>
        </motion.div>
        })}
    </div>
  )
}

export default Projek
