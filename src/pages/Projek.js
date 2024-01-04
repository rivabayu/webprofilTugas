import React, { useState } from 'react'
import ecom1 from "../asset/ecom1.png"
import css3 from "../asset/css3.png"
import reactjjs from "../asset/reactjs.png"
import tailwindimg from "../asset/tailwindcss.png"
import nextCom from '../asset/NextCommers.png'
import foodApp from "../asset/foodApps.png"
import nodejs from "../asset/nodejs.png"
import firebase from '../asset/firebase.png'
import kepeng from '../asset/kepeng.png'
import wedding from '../asset/wedding.png'
import studionami from '../asset/studionami.png'
import figma from '../asset/figma.png'


import { motion } from 'framer-motion'
import { fadeIn } from '../Efek'
import PageTi from '../components/PageTi'
import Cart from './Cart'
import Cart2 from './Cart2'




function Projek() {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const portofolio = [
        {
            name: 'Web Store Clotes',
            link: 'https://ecomlagi.vercel.app/',
            gambar: ecom1,
            tekno1: tailwindimg,
            tekno2: reactjjs,
            tekno3: css3,
            tect: 'Web Development',
        },
        {
            name: 'FoodApps',
            link: 'https://ecom-coba-rivabayu.vercel.app/',
            gambar: foodApp,
            tekno1: tailwindimg,
            tekno2: reactjjs,
            tekno3: firebase,
            tect: 'Web Development',
        },

        {
            name: 'NextCommerse',
            link: 'https://next-commerce-client.vercel.app/',
            gambar: nextCom,
            tekno1: tailwindimg,
            tekno2: reactjjs,
            tekno3: nodejs,
            tect: 'Web Development',
        },

        {
            name: 'Kepeng.io',
            link: 'https://www.figma.com/file/M8vJ43cAdUhrzMjYf1DSmo/Kepeng?type=design&fuid=1172810411778700520',
            gambar: kepeng,
            tekno: figma,
            tect: 'ui/ux'
        },
        {
            name: 'The About Wedding',
            link: 'https://www.figma.com/file/DUsOThkTY3BCFc539o0wSc/The-about-wedding?type=design&mode=design&t=U4ibqcE6LKohuJcv-0',
            gambar: wedding,
            tekno: figma,
            tect: 'ui/ux'
        },
        {
            name: 'Studionami',
            link: 'https://www.figma.com/file/4P6P6y6qX90Q5IDnmtqRNh/Studionami?type=design&mode=design&t=dZyphjAKh574zWTs-0',
            gambar: studionami,
            tekno: figma,
            tect: 'ui/ux'
        }
    ]

    const tabData = ['Web Development', "UI/UX"]
    return (

        <>
            <div className='flex bg-hero min-h-screen pt-40 flex-col bg-center bg-auto bg-repeat'>
                <PageTi />
                <div className="md:flex md:w-1/2 mx-auto  md:justify-center md:gap-16 relative pt-5 grid grid-cols-3">
                    {tabData.map((item, index) => {
                        return (
                            <button
                                key={index}
                                className={`py-2 border-b-2 transition-colors duration-300 ${index === activeTabIndex
                                    ? "border-[#1911fc] text-blue-500"
                                    : "border-transparent hover:border-black text-black"
                                    }`}
                                onClick={() => setActiveTabIndex(index)}
                            >
                                {item}
                            </button>
                        );
                    })}
                </div>
                <div className='flex flex-col lg:flex-row'>
                    {/* {activeTabIndex === 0 &&
                    portofolio.map ((item,index)=>{
                        return<Cart items={item} key={index}/>
                    })} */}
                    {activeTabIndex === 0 && portofolio.filter((item) => {
                        return item.tect === 'Web Development'
                    })
                        .map((res, index) => {
                            return <Cart items={res} key={index} />
                        })}
                    {activeTabIndex === 1 && portofolio.filter((item) => {
                        return item.tect === 'ui/ux'
                    })
                        .map((res, index) => {
                            return <Cart2 items={res} key={index} />
                        })}
                </div>
            </div>
        </>
    )
}

export default Projek
