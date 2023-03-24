
import React from 'react'
import gambar from '../asset/FOTO.jpg'
import css from '../asset/css3.png'
import bootstrap from '../asset/bootstrap.png'
import react from '../asset/reactjs.png'
import tailwindcss from '../asset/tailwindcss.png'
import firebase from '../asset/firebase.png'
import js from '../asset/js.png'
import { CssSyntaxError } from 'postcss'

function Profil() {
  return (
    <div className=''>
  <div className="hero ">
     <div className="hero-content flex-col lg:flex-row-reverse px-3">
    <img src={gambar} className="max-w-sm rounded-lg shadow-2xl px" />
    <div>
      <h1 className="text-5xl font-bold pt-10">Riva Bayu Syarifudin</h1>
      <p className='pt-5 text-md'>I'm a web developer enthusiast. Always seeking for a new experience through a case study to solve a problem. Also, learning a new thing like latest popular framework is fun for me</p>

      <div className='pt-10 '>
        <span className='font-semibold text-xl pl-3'>Stack</span>
        <div className='flex gap-5'>  
          <img src={bootstrap} className='w-20' alt=""/>
          <img src={tailwindcss} className='w-20' alt=""/>
          <img src={js} className='w-20' alt=""/>
          <img src={react} className='w-20' alt=""/>
          <img src={firebase} className='w-20' alt=""/>
        </div>
       
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
