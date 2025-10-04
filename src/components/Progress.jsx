import React from 'react'

const Progress = ({level, score, total}) => {
    const progressValue = (score/total) * 100;
  return (
    <>
    <div className='bg-white p-5 shadow-2xl rounded-2xl flex flex-col gap-2 items-start h-[180px] w-[270px] relative'>
        <h1 className='text-3xl font-bold'>Progress</h1>
        <h2 className='text-3xl font-semibold mb-1'>Level {level}</h2>
        <input type="range" value={progressValue} readOnly 
        className=' w-full h-2 rounded-lg appearance-none cursor-pointer
    bg-gradient-to-r from-green-500 to-gray-300'/>
        <p className='absolute right-[10%] top-[74%]'>{score}/{total}</p>
    </div>
    </>
  )
}

export default Progress