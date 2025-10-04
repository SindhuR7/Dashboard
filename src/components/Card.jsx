import React from 'react'
import Button from './Button'

export const Card = ({theme}) => {
  return (
    <>
    <div className='bg-white p-5 shadow-2xl rounded-2xl flex flex-col justify-center items-start h-[150px] w-[270px]'>
    <h2 className='text-2xl font-bold mb-3'>Your Theme</h2>
    <Button BtnName={theme} BtnColor={theme} textColor='#AFDBF5' />
    </div>
    </>
  )
}
