import React from 'react'
import harisenin from '../asset/harisenin.png'
import ecom1 from "../asset/ecom1.png"
import ecom2 from "../asset/ecom2.png"
import { Link } from 'react-router-dom'

function Portofolio() {
  return (
  <div className='flex flex-col justify-center'>
    <div className='flex items-center justify-center py-10 gap-5 px-2'>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure><img src={harisenin} alt="Shoes" /></figure>
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
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure><img src={ecom2} alt="Shoes" /></figure>
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
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure><img src={ecom1} alt="Shoes" /></figure>
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
      <button className="btn btn-wide ">Lebih Banyak</button>
    </Link>
    </div>
  )
}

export default Portofolio
