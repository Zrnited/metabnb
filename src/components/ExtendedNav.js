import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ExtendedNav = ({scroll, connectedWallet, modal, setModal, currentPage}) => {
  return (
    <motion.nav 
        className='flex flex-col justify start mt-6 px-6 gap-3'
        animate={{y: 0}}
        initial={{y: -50}}
    >
        <Link to={'/'} className='hover:text-custompurple tracking-wide transition ease-in-out delay-100'>
            Home
        </Link>
        <Link to={'/place'} className='hover:text-custompurple tracking-wide transition ease-in-out delay-100'>
            Place to Stay
        </Link>
        <Link onClick={scroll} className='hover:text-custompurple tracking-wide transition ease-in-out delay-100'>
            NFTs
        </Link>
        <Link className='hover:text-custompurple tracking-wide transition ease-in-out delay-100'>
            Community
        </Link>
        <button
            className={
              !connectedWallet
                ? "bg-custompurple px-3 py-2 rounded-lg text-sm text-white opacity-90 hover:opacity-100 transition ease-in-out delay-100"
                : "bg-green-500 flex flex-row gap-2 tracking-wide items-center px-3 py-2 rounded-lg text-sm text-white font-bold opacity-90 hover:opacity-100 transition ease-in-out delay-100"
            }
            // onClick={() => setModal(!modal)}
            onClick={()=>{
              if (currentPage === 'place'){
                return
              } else {
                setModal(!modal);
              }
            }}
          >
            {connectedWallet && <img src={connectedWallet?.image} alt='wallet-logo' width={'25px'}/>}
            {!connectedWallet ? "Connect Wallet" : `${connectedWallet.name}`}
          </button>
        <div className='h-1 w-full bg-custompurple mb-4'></div>
    </motion.nav>
  )
}

export default ExtendedNav