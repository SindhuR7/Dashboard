import React, { useState } from 'react'
import Button from './Button'

const Count = ({count, increment, decrement}) => {


  return (
    <>
    <div  className="bg-white p-5 shadow-2xl rounded-2xl flex flex-col justify-center items-start h-[180px] w-[270px]">
    <h1 className='text-3xl font-bold'>Counter</h1>
    <h2 className='text-4xl font-semibold m-2'>{count}</h2>
    <div className='flex '>
    <Button BtnName='Increment' BtnColor='#1E90FF' BtnHandle={increment}/>
    <Button BtnName='Decrement' BtnColor='#B2FFFF' BtnHandle={decrement}/>
    </div>
    </div>
    </>
  )
}

export default Count