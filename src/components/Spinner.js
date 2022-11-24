import React from 'react'
import { Circles } from 'react-loader-spinner/dist/esm/loader/Circles'

const Spinner = ({ message }) => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
        <Circles 
            color='#034671'
            height={50}
            width={200}
            className='mb-5 mt-0'
        />
        <p className='text-lg text-center px-2 pt-2 tracking-widest'>{message}</p>
    </div>
  )
}

export default Spinner