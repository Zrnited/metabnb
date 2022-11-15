import React from 'react'
import logowhite from '../assets/logowhite.png'; 
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='bg-black p-8 flex flex-col-reverse gap-8 sm:flex-row justify-evenly'>
        <div className='flex flex-col gap-5'>
            <img 
                src={logowhite}
                alt='logo-pic'
                className='w-36'
            />
            <div className='flex flex-row gap-4'>
                <a href='https://facebook.com/metabnb' target={'_blank'} rel='noreferrer'> <BsFacebook color='white' /> </a>
                <a href='https://instagram.com/metabnb' target={'_blank'} rel='noreferrer'><BsInstagram color='white' /></a>
                <a href='https://twitter.com/metabnb' target={'_blank'} rel='noreferrer'><BsTwitter color='white' /></a>
            </div>
            <p className='text-white'> &copy; 2022 Metabnb</p>
        </div>
        <div className='text-white flex flex-col gap-6 sm:flex-row md:gap-20'>
            <div className='flex flex-col'>
                <h1 className='mb-4 font-bold'> Community </h1>
                <a href='https://metabnb.com/' className='text-sm mb-2'> NFT </a>
                <a href='https://metabnb.com/' className='text-sm mb-2'> Token </a>
                <a href='https://metabnb.com/' className='text-sm mb-2'> Landlords </a>
                <a href='https://metabnb.com/' className='text-sm mb-2'> Discord </a>
            </div>
            <div className='flex flex-col'>
                <h1 className='mb-4 font-bold'> Places </h1>
                <a href='https://metabnb.com/' className='text-sm mb-2'> Castle </a>
                <a href='https://metabnb.com/' className='text-sm mb-2'> Farms </a>
                <a href='https://metabnb.com/' className='text-sm mb-2'> Beach </a>
                <a href='https://metabnb.com/' className='text-sm mb-2'> Learn more </a>
            </div>
            <div className='flex flex-col'>
                <h1 className='mb-4 font-bold'> About Us </h1>
                <a href='https://metabnb.com/' className='text-sm mb-2'> Road Map </a>
                <a href='https://metabnb.com/' className='text-sm mb-2'> Creators </a>
                <a href='https://metabnb.com/' className='text-sm mb-2'> Career </a>
                <a href='https://metabnb.com/' className='text-sm mb-2'> Contact Us </a>
            </div>
        </div>
    </div>
  )
}

export default Footer