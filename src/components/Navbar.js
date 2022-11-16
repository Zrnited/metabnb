import React from 'react'
import metalogo from '../assets/metalogo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import ExtendedNav from './ExtendedNav';
import { motion } from 'framer-motion';

const Navbar = ({modal, setModal, setMoreLinks, moreLinks}) => {
  return (
    <header className='flex flex-col p-4 shadow-lg fixed left-0 right-0 top-0 bg-white z-20'>
        <nav className='flex flex-row justify-between items-center w-full lg:justify-around'>
            <img 
                src={metalogo}
                alt='logo'
                className='w-36 sm:w-40'
            />

            <div className='flex flex-row items-center gap-3 sm:hidden'>
                <button 
                    className='bg-custompurple px-3 py-2 rounded-lg text-sm text-white opacity-90 hover:opacity-100 transition ease-in-out delay-100'
                    onClick={()=>setModal(!modal)}
                >
                    connect wallet
                </button>
                <motion.button 
                    className='text-lg' 
                    onClick={()=>setMoreLinks(!moreLinks)}
                    animate={{rotate: moreLinks ? 90 : 0}}
                    whileHover={{scale: 1.2}}
                >
                    <i> <GiHamburgerMenu color='#B840AE'/> </i>
                </motion.button>
            </div>

            <ul className='hidden sm:flex flex-row gap-2 md:gap-6'>
                <li>
                    <Link to={'/'} className='hover:text-custompurple transition ease-in-out delay-100 lg:text-lg'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to={'/place'} className='hover:text-custompurple transition ease-in-out delay-100 lg:text-lg'>
                        Place to Stay
                    </Link>
                </li>
                <li>
                    <Link to={'/'} className='hover:text-custompurple transition ease-in-out delay-100 lg:text-lg'>
                        NFTs
                    </Link>
                </li>
                <li>
                    <Link to={'/'} className='hover:text-custompurple transition ease-in-out delay-100 lg:text-lg'>
                        Community
                    </Link>
                </li>
            </ul>
            <button 
                className='hidden sm:flex bg-custompurple px-3 py-2 rounded-lg text-sm text-white opacity-90 hover:opacity-100 transition ease-in-out delay-100'
                onClick={()=>setModal(!modal)}
            >
                connect wallet
            </button>
        </nav>

        {moreLinks && <ExtendedNav />}
    </header>
  )
}

export default Navbar