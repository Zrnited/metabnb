import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BiChevronRight } from 'react-icons/bi'
import metaicon from '../assets/metaicon.png';
import walleticon from '../assets/walleticon.png';
import { motion } from 'framer-motion';

const Modal = ({setModal, modal, getWallet}) => {

    const walletData = [
        {
            name: 'Metamask',
            image: metaicon
        },
        {
            name: 'WalletConnect',
            image: walleticon
        }
    ]
    
  return (
    <div className='w-full h-screen fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center z-20'>
        <div className='w-full h-full fixed top-0 bottom-0 left-0 right-0 bg-overlay' onClick={()=>setModal(!modal)}></div>
        <div className='absolute p-4 z-30 top-1/2 transform -translate-y-1/2 rounded-lg bg-white w-90 sm:w-1/2'>
            <motion.div className='flex flex-col place-self-center' animate={{scale: 1.0}} initial={{scale: 0.4}}>
                <div className='flex justify-between items-center mb-2'>
                    <h1 className='font-bold text-lg'>Connect Wallet</h1>
                    <i className='cursor-pointer' onClick={()=>setModal(!modal)}><AiOutlineClose /></i>
                </div>
                <div className='h-1 w-full bg-gray-200 mb-4'></div>
                <div className='flex flex-col gap-2'>
                    <p className='text-sm'>Choose your preferred wallet:</p>
                    {
                        walletData?.map((currentWallet)=>{
                            return (
                                <div 
                                    className='flex justify-between items-center border border-gray-200 rounded-lg p-2 cursor-pointer hover:bg-gray-100 transition ease-in-out delay-100'
                                    onClick={()=>getWallet(currentWallet)}
                                >
                                    <div className='flex gap-3 items-center'>
                                        <img 
                                            src={currentWallet.image}
                                            alt='meta-icon'
                                            className='w-10'
                                        />
                                        <strong className='text-lg'>{currentWallet.name}</strong>
                                    </div>
                                    <i> <BiChevronRight /> </i>
                                </div>
                            )
                        })
                    }
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Modal