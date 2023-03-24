import React from 'react'
import EmailJS from '../components/EmailJS'
import Profil from '../components/Profil'
import {motion} from 'framer-motion'
import {fadeIn} from '../Efek'


function Contact() {
  return (
    <motion.div 
    variants={fadeIn('up',0.5)}
    initial="hidden"
    whileInView={'show'}div className='flex bg-hero min-h-screen pt-40 flex-col bg-center bg-auto bg-repeat'>
      <Profil/>
      <EmailJS/>
    </motion.div>
  )
}

export default Contact
