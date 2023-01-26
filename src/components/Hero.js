import React from 'react'
import gambar from '../asset/logo.jpg'

function Hero() {
  return (
    <div className="pt-40 flex items-center pb-20 justify-center bg-base-200 z-0">
  <div className="hero-content flex-col lg:flex-row">
    <img src={gambar} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">selamat datang di webbbbb</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
  </div>
</div>
  )
}

export default Hero
