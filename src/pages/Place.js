import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { BiChevronDown } from 'react-icons/bi'
import { BiChevronUp } from 'react-icons/bi'
import { MdLocationOn } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'
import { PlacePictures } from '../components/place'
import {AiFillStar} from 'react-icons/ai' 
import { motion } from 'framer-motion'
import Modal from '../components/Modal'
// import Spinner from '../components/Spinner'

const Place = () => {

    window.addEventListener('load', ()=>{
        window.scrollTo(0, 0);
    });

    const currentPage = 'place';

    const [filter, setFilter] = React.useState(null);
    // console.log(filter);
    const [array, setArray] = React.useState();
    const filteredArray = PlacePictures?.filter((current)=>{
        return current?.type === filter; 
    })
    const [wallet, setWallet] = React.useState(null)
    const component = 'Place'
    // console.log(filteredArray)

    const [filterOptions, setFilterOptions] = React.useState(false);
    const [modal, setModal] = React.useState(false);
    const [moreLinks, setMoreLinks] = React.useState(false);

    React.useLayoutEffect(()=>{
        const getWallet = JSON.parse(window.sessionStorage.getItem('wallet'))
        if(getWallet){
            setWallet(getWallet)
        } else {
            setWallet(null);
        }
    }, [])

    React.useEffect(()=>{
        if(filter === null){
            setArray(PlacePictures);
        } else {
            setArray(filteredArray);
        }
    }, [filter])

  return (
    <div>
        <Navbar connectedWallet={wallet} setModal={setModal} modal={modal} moreLinks={moreLinks} setMoreLinks={setMoreLinks} component={component} currentPage={currentPage} />
        {modal && <Modal setModal={setModal} modal={modal} />}
        <div className='mt-24 flex flex-row justify-around md:items-center md:px-5'>
            <div className='relative w-1/2 md:hidden'>
                <div 
                    className='border border-gray-200 p-2 flex flex-row justify-between w-full items-center rounded-lg hover:bg-custompurple hover:border-custompurple hover:text-white transition ease-in-out delay-100 cursor-pointer'
                    onClick={()=>setFilterOptions(!filterOptions)}
                >
                    <p className='text-sm'>{filter ? `${filter}` : `Filter`}</p>
                    <i>{filterOptions ? <BiChevronUp /> : <BiChevronDown />}</i>
                </div>

                {filterOptions && <ul className='absolute top-12 bg-white shadow-lg p-4 w-full flex flex-col gap-1 z-20'>
                    {filter !== null && <li 
                        className='text-sm transition ease-in-out delay-100 cursor-pointer p-2 hover:bg-custompurple hover:text-white rounded-lg'
                        onClick={(e)=>{
                            setFilter(null);
                            setFilterOptions(false);
                        }}
                    >
                        None
                    </li>}
                    <li 
                        className='text-sm transition ease-in-out delay-100 cursor-pointer p-2 hover:bg-custompurple hover:text-white rounded-lg'
                        onClick={(e)=>{
                            setFilter(e.target.innerHTML);
                            setFilterOptions(false);
                        }}
                    >
                        Restaurant
                    </li>
                    <li 
                        className='text-sm transition ease-in-out delay-100 cursor-pointer p-2 hover:bg-custompurple hover:text-white rounded-lg'
                        onClick={(e)=>{
                            setFilter(e.target.innerHTML);
                            setFilterOptions(false);
                        }}
                    >
                        Cottage
                    </li>
                    <li 
                        className='text-sm transition ease-in-out delay-100 cursor-pointer p-2 hover:bg-custompurple hover:text-white rounded-lg'
                        onClick={(e)=>{
                            setFilter(e.target.innerHTML);
                            setFilterOptions(false);
                        }}
                    >
                        Castle
                    </li>
                    <li 
                        className='text-sm transition ease-in-out delay-100 cursor-pointer p-2 hover:bg-custompurple hover:text-white rounded-lg'
                        onClick={(e)=>{
                            setFilter(e.target.innerHTML);
                            setFilterOptions(false);
                        }}
                    >
                        Fantast City
                    </li>
                    <li 
                        className='text-sm transition ease-in-out delay-100 cursor-pointer p-2 hover:bg-custompurple hover:text-white rounded-lg'
                        onClick={(e)=>{
                            setFilter(e.target.innerHTML);
                            setFilterOptions(false);
                        }}
                    >
                        Beach
                    </li>
                    <li 
                        className='text-sm transition ease-in-out delay-100 cursor-pointer p-2 hover:bg-custompurple hover:text-white rounded-lg'
                        onClick={(e)=>{
                            setFilter(e.target.innerHTML);
                            setFilterOptions(false);
                        }}
                    >
                        Carbins
                    </li>
                    <li 
                        className='text-sm transition ease-in-out delay-100 cursor-pointer p-2 hover:bg-custompurple hover:text-white rounded-lg'
                        onClick={(e)=>{
                            setFilter(e.target.innerHTML);
                            setFilterOptions(false);
                        }}
                    >
                        Off-grid
                    </li>
                    <li 
                        className='text-sm transition ease-in-out delay-100 cursor-pointer p-2 hover:bg-custompurple hover:text-white rounded-lg'
                        onClick={(e)=>{
                            setFilter(e.target.innerHTML);
                            setFilterOptions(false);
                        }}
                    >    
                        Farm
                    </li>
                </ul>}
            </div>

            <div className='hidden md:flex'>
                <ul className='flex flex-row gap-3 text-sm lg:text-base lg:gap-7'>
                    <li 
                        className='hover:text-custompurple cursor-pointer transition ease-in-out delay-100'
                        onClick={(e)=>{
                            setFilter(e.target.innerHTML);
                            setFilterOptions(false);
                        }}
                    >
                        Restaurant
                    </li>
                    <li 
                        className='hover:text-custompurple cursor-pointer transition ease-in-out delay-100'
                        onClick={(e)=>{
                            setFilter(e.target.innerHTML);
                            setFilterOptions(false);
                        }}
                    >
                        Cottage
                    </li>
                    <li 
                        className='hover:text-custompurple cursor-pointer transition ease-in-out delay-100'
                        onClick={(e)=>{
                            setFilter(e.target.innerHTML);
                            setFilterOptions(false);
                        }}
                    >
                        Castle
                    </li>
                    <li 
                        className='hover:text-custompurple cursor-pointer transition ease-in-out delay-100'
                        onClick={(e)=>{
                            setFilter(e.target.innerHTML);
                            setFilterOptions(false);
                        }}
                    >
                        Fantast City
                    </li>
                    <li 
                        className='hover:text-custompurple cursor-pointer transition ease-in-out delay-100'
                        onClick={(e)=>{
                            setFilter(e.target.innerHTML);
                            setFilterOptions(false);
                        }}
                    >
                        Beach
                    </li>
                    <li 
                        className='hover:text-custompurple cursor-pointer transition ease-in-out delay-100'
                        onClick={(e)=>{
                            setFilter(e.target.innerHTML);
                            setFilterOptions(false);
                        }}
                    >
                        Carbins
                    </li>
                    <li 
                        className='hover:text-custompurple cursor-pointer transition ease-in-out delay-100'
                        onClick={(e)=>{
                            setFilter(e.target.innerHTML);
                            setFilterOptions(false);
                        }}
                    >
                        Off-grid
                    </li>
                    <li 
                        className='hover:text-custompurple cursor-pointer transition ease-in-out delay-100'
                        onClick={(e)=>{
                            setFilter(e.target.innerHTML);
                            setFilterOptions(false);
                        }}
                    >
                        Farm
                    </li>

                    {filter !== null && <button         className='bg-red-400 rounded-full text-white text-sm p-1 font-extrabold shadow lg:p-2 hover:bg-red-600 transition ease-in-out delay-100'
                        onClick={()=>{
                            setFilter(null);
                        }}
                    >
                        <AiOutlineClose size={'12px'} />
                    </button>}
                </ul>
            </div>
            
            <div className='border border-gray-200 p-2 flex flex-row justify-between w-32 items-center rounded-lg hover:bg-custompurple hover:text-white hover:border-custompurple transition ease-in-out delay-100 cursor-pointer'>
                <p className='text-sm'>Location</p>
                <i><MdLocationOn /></i>
            </div>
        </div>

        <section className='py-6 flex justify-center' onClick={()=>setFilterOptions(false)}>
            <div className='flex flex-col gap-6 w-auto sm:flex-row sm:flex-wrap sm:justify-center'>
                {array?.map((item)=>{
                    return (
                        <motion.div 
                            className='w-292 border border-gray-300 rounded-xl p-3 gap-3 cursor-pointer hover:shadow-lg lg:w-64'
                            whileHover={{scale: 1.1}}
                        >
                            <div>
                                <img 
                                    src={item.image}
                                    alt='nft-pic'
                                    className='lg:w-full'
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