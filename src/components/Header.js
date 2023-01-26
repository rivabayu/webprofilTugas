import React from 'react'
import {Link} from "react-router-dom"

function Header() {
  return (
<div className="navbar fixed bg-blue-500 drop-shadow-lg z-30">
  <div className="flex-1">
    <div className="btn btn-ghost normal-case text-xl text-white">My Portofolio</div>
  </div>
  <div className='flex items-center justify-center gap-5 px-4'>
    <Link to={"/"} className="text-white font-semibold">
        Home
    </Link>
    <Link to={"/portofolio/"} className="text-white font-semibold">
        Portofolio
    </Link>
    <Link to={"/contact/"} className="text-white font-semibold">
        Kontak
    </Link>
  </div>
</div>
  )
}

export default Header
