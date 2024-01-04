import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import logo from '../asset/logo4.png'

function Header() {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    })
  })
  return (
    <div className={`${bg ? 'bg-white h-20 shadow-md' : 'bg-none shadow-none h-24 '} flex items-center fixed top-0 w-full text-white z-10 transision-all duration-500 px-10 `}>
      <div className="flex-1 ">
        <div className="btn btn-ghost normal-case text-xl text-blue-500">My Portofolio</div>
      </div>
      <div className='flex items-center justify-center gap-5 px-4'>
        <Link to={"/"} className="text-blue-500 font-semibold">
          Home
        </Link>
        <Link to={"/portofolio/"} className="text-blue-500 font-semibold">
          Project
        </Link>
        {/* <Link to={"/contact/"} className="text-blue-500 font-semibold">
          Kontak
        </Link> */}
      </div>
    </div>

  )
}

export default Header
