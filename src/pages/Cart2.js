import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../Efek'
function Cart2({ items }) {
    return (
        <a href={items.link} target="_blank" className="" rel="noreferrer">
            <div className='group hover:-translate-y-4 ease-in-out transition-all duration-300 cursor-pointer relative animate-fadeIn '>
                <motion.div
                    variants={fadeIn('up', 0.5)}
                    initial="hidden"
                    whileInView={'show'}
                    className="md:mt-20 mt-20 lg:mt-20 flex flex-col items-center justify-center bg-base-100 shadow-xl mx-10  md:mx-40 lg:mx-6 rounded-2xl z-30">
                    <div>
                        <img src={items.gambar} className="rounded-xl md:w-[50rem] h-60 z-10" />
                    </div>
                    <div className="flex justify-between my-5">
                        <div className='flex items-center flex-row justify-between gap-10'>
                            <p className='font-semibold text-xl flex items-start'>{items.name}</p>
                            <div className='flex flex-row gap-2'>
                                <img className='w-14 h-14' src={items.tekno} alt="" />

                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </a>
    )
}

export default Cart2