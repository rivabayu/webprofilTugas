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




function Portofolioo1() {
  return (
    <div className='my-28 px-4 md:px-40 w-auto'>
         <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={ecom1} className="md:w-[40rem] w-[40rem] " alt="Album"/></figure>
            <div className="card-body">
                <div className="text-2xl font-semibold">Harisenin.com</div>
                <p>Tugas membuat web clone harisenin.com</p>
                <div className='flex flex-col'>
                    <div className='text-xl font-semibold pt-4'>Teknologi yang digunakan</div>
                    <div className='flex flex-row'>
                        <img className='w-14 h-14' src={css3} alt=""/>
                        <img className='w-14 h-14' src={html5} alt=""/>
                        <img className='pt-2 pl-2 w-14 h-14' src={tailwindimg} alt=""/>
                        <img className='pt-2 pl-2 w-14 h-14' src={reactjjs} alt=""/>
                    </div>
                </div>
                <a href='https://tugas-tailwindcss.vercel.app/' target="_blank" className="card-actions justify-end" rel="noreferrer">
                <button className="btn btn-primary">Kunjungi</button>
                </a>
            </div>
        </div>
         <div className="card lg:card-side bg-base-100 shadow-xl mt-10">
            <figure><img src={ecom2} className="md:w-[40rem] w-[40rem] " alt="Album"/></figure>
            <div className="card-body">
                <div className="text-2xl font-semibold">Harisenin.com</div>
                <p>Tugas membuat web clone harisenin.com</p>
                <div className='flex flex-col'>
                    <div className='text-xl font-semibold pt-4'>Teknologi yang digunakan</div>
                    <div className='flex flex-row'>
                        <img className='w-14 h-14' src={css3} alt=""/>
                        <img className='w-14 h-14' src={html5} alt=""/>
                        <img className='pt-2 pl-2 w-14 h-14' src={tailwindimg} alt=""/>
                        <img className='pt-2 pl-2 w-14 h-14' src={reactjjs} alt=""/>
                    </div>
                </div>
                <a href='https://tugas-tailwindcss.vercel.app/' target="_blank" className="card-actions justify-end" rel="noreferrer">
                <button className="btn btn-primary">Kunjungi</button>
                </a>
            </div>
        </div>
         <div className="card lg:card-side bg-base-100 shadow-xl mt-10">
            <figure><img src={harisenin} className="md:w-[40rem] w-[40rem] " alt="Album"/></figure>
            <div className="card-body">
                <div className="text-2xl font-semibold">Harisenin.com</div>
                <p>Tugas membuat web clone harisenin.com</p>
                <div className='flex flex-col'>
                    <div className='text-xl font-semibold pt-4'>Teknologi yang digunakan</div>
                    <div className='flex flex-row'>
                        <img className='w-14 h-14' src={css3} alt=""/>
                        <img className='w-14 h-14' src={html5} alt=""/>
                        <img className='pt-2 pl-2 w-14 h-14' src={tailwindimg} alt=""/>
                    </div>
                </div>
                <a href='https://tugas-tailwindcss.vercel.app/' target="_blank" className="card-actions justify-end" rel="noreferrer">
                <button className="btn btn-primary">Kunjungi</button>
                </a>
            </div>
        </div>
         <div className="card lg:card-side bg-base-100 shadow-xl mt-10">
            <figure><img src={webprofil} className="md:w-[40rem] w-[40rem] " alt="Album"/></figure>
            <div className="card-body">
                <div className="text-2xl font-semibold">Harisenin.com</div>
                <p>Tugas membuat web clone harisenin.com</p>
                <div className='flex flex-col'>
                    <div className='text-xl font-semibold pt-4'>Teknologi yang digunakan</div>
                    <div className='flex flex-row'>
                        <img className='w-14 h-14' src={css3} alt=""/>
                        <img className='w-14 h-14' src={html5} alt=""/>
                        <img className='pt-2 pl-2 w-14 h-14' src={bootstap} alt=""/>
                    </div>
                </div>
                <a href='https://tugas-tailwindcss.vercel.app/' target="_blank" className="card-actions justify-end" rel="noreferrer">
                <button className="btn btn-primary">Kunjungi</button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Portofolioo1
