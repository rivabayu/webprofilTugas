/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import gambar from '../asset/FOTO.jpg'
import fb from '../asset/fb2.png'
import twittwe from '../asset/twitter.png'
import github from '../asset/github.png'
import EmailJS from './EmailJS'

function Profil() {
  return (
    <div className=''>
  <div className="hero ">
     <div className="hero-content flex-col lg:flex-row-reverse px-3">
    <img src={gambar} className="max-w-sm rounded-lg shadow-2xl px" />
    <div>
      <h1 className="text-5xl font-bold pt-10">Riva Bayu Syarifudin</h1>
      <div className='flex flex-row pt-10'>
          <a href="https://twitter.com/rivabays" target='_blank'>
      <img src={twittwe} className='w-20' alt=""/>
          </a>
      <a href="https://github.com/rivabayu/" target='_blank'>
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
