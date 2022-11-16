import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { BiChevronDown } from 'react-icons/bi'
import { BiChevronUp } from 'react-icons/bi'
import { BiVolume } from 'react-icons/bi'
import { PlacePictures } from '../components/place'
import {AiFillStar} from 'react-icons/ai' 
import { motion } from 'framer-motion'

const Place = () => {

    const [filterOptions, setFilterOptions] = React.useState(false);
    const [modal, setModal] = React.useState(false);
    const [moreLinks, setMoreLinks] = React.useState(false);
  return (
    <div>
        <Navbar setModal={setModal} modal={modal} moreLinks={moreLinks} setMoreLinks={setMoreLinks} />
        <div className='mt-28 flex flex-row justify-around md:items-center md:px-5'>
            <div className='relative w-1/2 md:hidden'>
                <div 
                    className='border border-gray-200 p-2 flex flex-row justify-between w-full items-center rounded-lg hover:bg-custompurple hover:text-white hover:border-none transition ease-in-out delay-100 cursor-pointer'
                    onClick={()=>setFilterOptions(!filterOptions)}
                >
                    <p className='text-sm'>Filter</p>
                    <i>{filterOptions ? <BiChevronUp /> : <BiChevronDown />}</i>
                </div>

                {filterOptions && <ul className='absolute top-12 bg-white shadow-lg p-4 w-full flex flex-col gap-1'>
                    <li className='text-sm transition ease-in-out delay-100 cursor-pointer p-2 hover:bg-custompurple hover:text-white rounded-lg'>
                        Restaurant
                    </li>
                    <li className='text-sm transition ease-in-out delay-100 cursor-pointer p-2 hover:bg-custompurple hover:text-white rounded-lg'>
                        Cottage
                    </li>
                    <li className='text-sm transition ease-in-out delay-100 cursor-pointer p-2 hover:bg-custompurple hover:text-white rounded-lg'>
                        Castle
                    </li>
                    <li className='text-sm transition ease-in-out delay-100 cursor-pointer p-2 hover:bg-custompurple hover:text-white rounded-lg'>
                        Fantast City
                    </li>
                    <li className='text-sm transition ease-in-out delay-100 cursor-pointer p-2 hover:bg-custompurple hover:text-white rounded-lg'>
                        Beach
                    </li>
                    <li className='text-sm transition ease-in-out delay-100 cursor-pointer p-2 hover:bg-custompurple hover:text-white rounded-lg'>
                        Carbins
                    </li>
                    <li className='text-sm transition ease-in-out delay-100 cursor-pointer p-2 hover:bg-custompurple hover:text-white rounded-lg'>
                        Off-grid
                    </li>
                    <li className='text-sm transition ease-in-out delay-100 cursor-pointer p-2 hover:bg-custompurple hover:text-white rounded-lg'>    
                        Farm
                    </li>
                </ul>}
            </div>

            <div className='hidden md:flex'>
                <ul className='flex flex-row gap-5 text-sm'>
                    <li className='hover:text-custompurple cursor-pointer transition ease-in-out delay-100'>
                        Restaurant
                    </li>
                    <li className='hover:text-custompurple cursor-pointer transition ease-in-out delay-100'>
                        Cottage
                    </li>
                    <li className='hover:text-custompurple cursor-pointer transition ease-in-out delay-100'>
                        Castle
                    </li>
                    <li className='hover:text-custompurple cursor-pointer transition ease-in-out delay-100'>
                        Fantast city
                    </li>
                    <li className='hover:text-custompurple cursor-pointer transition ease-in-out delay-100'>
                        Beach
                    </li>
                    <li className='hover:text-custompurple cursor-pointer transition ease-in-out delay-100'>
                        Carbins
                    </li>
                    <li className='hover:text-custompurple cursor-pointer transition ease-in-out delay-100'>
                        Off-grid
                    </li>
                    <li className='hover:text-custompurple cursor-pointer transition ease-in-out delay-100'>
                        Farm
                    </li>
                </ul>
            </div>
            
            <div className='border border-gray-200 p-2 flex flex-row justify-between w-32 items-center rounded-lg hover:bg-custompurple hover:text-white hover:border-0 hover:border-none transition ease-in-out delay-100 cursor-pointer'>
                <p className='text-sm'>Location</p>
                <i><BiVolume /></i>
            </div>
        </div>

        <section className='py-6 flex justify-center'>
            <div className='flex flex-col gap-6 w-auto sm:flex-row sm:flex-wrap sm:justify-center'>
                {PlacePictures?.map((item)=>{
                    return (
                        <motion.div 
                            className='w-292 border border-gray-300 rounded-xl p-3 gap-3 cursor-pointer hover:shadow-lg'
                            whileHover={{scale: 1.1}}
                        >
                            <div>
                                <img 
                                    src={item.image}
                                    alt='nft-pic'
                                />
                            </div>
                            <div className='flex flex-row gap-2 justify-between mt-3'>
                                <div className='flex flex-col gap-2'>
                                    <p className='text-xs font-bold'>Desert King</p>
                                    <p className='text-xs'>2345km away</p>
                                    <div className='flex flex-row gap-2'>
                                        <AiFillStar color='#A02279' size={'10px'} />
                                        <AiFillStar color='#A02279' size={'10px'} />
                                        <AiFillStar color='#A02279' size={'10px'} />
                                        <AiFillStar color='#A02279' size={'10px'} />
                                        <AiFillStar color='#A02279' size={'10px'} />
                                    </div>
                                </div>
                                <div className='flex flex-col items-end gap-2'>
                                    <p className='text-xs font-bold'>IMBT per night</p>
                                    <p className='text-xs'>available for 2weeks stay</p>
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </section>

        <Footer />
    </div>
  )
}

export default Place