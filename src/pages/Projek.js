import React from 'react'
import ecom1 from "../asset/ecom1.png"
import css3 from "../asset/css3.png"
import reactjjs from "../asset/reactjs.png"
import tailwindimg from "../asset/tailwindcss.png"
import nextCom from '../asset/NextCommers.png'
import foodApp from "../asset/foodApps.png"
import nodejs from "../asset/nodejs.png"
import firebase from '../asset/firebase.png'


import {motion} from 'framer-motion'
import {fadeIn} from '../Efek'
import PageTi from '../components/PageTi'


const portofolio = [
    {
        name : 'Web Store Clotes',
        link : 'https://ecomlagi.vercel.app/',
        gambar : ecom1,
        tekno1 : tailwindimg,
        tekno2 : reactjjs,
        tekno3 : css3
    },
    {
        name : 'FoodApps',
        link : 'https://ecom-coba-rivabayu.vercel.app/',
        gambar : foodApp,
        tekno1 : tailwindimg,
        tekno2 : reactjjs,
        tekno3 : firebase
    },
    
    {
        name : 'NextCommerse',
        link : 'https://next-commerce-client.vercel.app/',
        gambar : nextCom,
        tekno1 : tailwindimg,
        tekno2 : reactjjs,
        tekno3 : nodejs
    },
    
]

function Projek() {
  return (
    <>
    <div className='flex bg-hero min-h-screen pt-40 flex-col bg-center bg-auto bg-repeat'>
    <PageTi/>
    <div className='flex flex-col lg:flex-row'>   
        {portofolio.map((portofolio) => { 
            const {name, link, gambar, tekno1, tekno2, tekno3} = portofolio; 
            return  (
            <a href={link} target="_blank" className="" rel="noreferrer">
                <div className='group hover:-translate-y-4 ease-in-out transition-all duration-300 cursor-pointer relative animate-fadeIn '>  
                    <motion.div 
                    variants={fadeIn('up',0.5)}
                    initial="hidden"
                    whileInView={'show'}
                    className="md:mt-20 mt-20 lg:mt-20 flex flex-col items-center justify-center bg-base-100 shadow-xl mx-10  md:mx-40 lg:mx-6 rounded-2xl z-30">
                    <div>
                   <img src={gambar} className="rounded-xl md:w-[50rem] h-60 z-10" alt=""/>
                    </div>
                    <div className="flex justify-between my-5">
                        <div className='flex items-center flex-row justify-between gap-10'>
                            <p className='font-semibold text-xl flex items-start'>{name}</p>
                            <div className='flex flex-row gap-2'>
                                <img className='w-14 h-14' src={tekno1} alt=""/>
                                <img className='w-14 h-14' src={tekno2} alt=""/>
                                <img className='w-14 h-14' src={tekno3} alt=""/>
                            </div>
                        </div>
                    </div>
                </motion.div>
                </div>
            </a>)
        })}
    </div>
    </div>
    </>
  )
}

export default Projek
