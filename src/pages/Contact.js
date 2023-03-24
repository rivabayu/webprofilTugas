import React from 'react'
import EmailJS from '../components/EmailJS'
import Profil from '../components/Profil'

function Contact() {
  return (
    <div className='flex bg-hero min-h-screen pt-40 flex-col bg-center bg-auto bg-repeat'>
      <Profil/>
      <EmailJS/>
    </div>
  )
}

export default Contact
