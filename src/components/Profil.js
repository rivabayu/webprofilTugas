/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import gambar from '../asset/FOTO.jpg'
import fb from '../asset/fb2.png'
import twittwe from '../asset/twitter.png'
import github from '../asset/github.png'

function Profil() {
  return (
    <div className=''>
  <div className="hero min-h-screen bg-base-200">
     <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={gambar} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Riva Bayu Syarifudin</h1>
      <p className="py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <h2>hubungi saya di</h2>
      <div className='flex flex-row'>
        <a href='https://facebook.com/' target="_blank">
      <img src={fb} className='w-20' alt="" />
          </a> 
          <a href="https://twitter.com/" target='_blank'>
      <img src={twittwe} className='w-20' alt=""/>
          </a>
      <a href="https://github.com/" target='_blank'>
      <img src={github} className='w-20' alt=""/>
      </a>
      </div>
      
    </div>
    <div className='flex items-center justify-center'>
    
      
    </div>
  </div>
</div>
    </div>
  )
}

export default Profil
