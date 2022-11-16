import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ExtendedNav = () => {
  return (
    <motion.nav 
        className='flex flex-col justify start mt-6 px-6 gap-3'
        animate={{y: 0}}
        initial={{y: -50}}
    >
        <Link className='hover:text-custompurple tracking-wide transition ease-in-out delay-100'>
            Home
        </Link>
        <Link className='hover:text-custompurple tracking-wide transition ease-in-out delay-100'>
            Place to Stay
        </Link>
        <Link className='hover:text-custompurple tracking-wide transition ease-in-out delay-100'>
            NFTs
        </Link>
        <Link className='hover:text-custompurple tracking-wide transition ease-in-out delay-100'>
            Community
        </Link>
        <div className='h-1 w-full bg-custompurple mb-4'></div>
    </motion.nav>
  )
}

export default ExtendedNav