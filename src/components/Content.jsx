import React, { useState } from 'react'
import Count from './Count'
import Theme from './Theme'
import { Card } from './Card'
import Progress from './Progress'
import { FaHandsClapping } from "react-icons/fa6";

const Content = () => {
  const [theme,setTheme] = useState("")
  const [text, setText] = useState('')
  
    const [count, setCount] = useState(0)

    const increment = () => {
        if(count < 10 )
            setCount(count + 1)
        else if(count < 20)
            setCount(count + 5)
        else if(count < 60)
            setCount(count + 8)
        else 
            setCount(count + 12)
    }

    const decrement = () => {
        if(count > 0)
            setCount(count - 1)
        else
            setCount(0)
    }

    const level = Math.floor(count/20) + 1;
    const total = 100;

    const userName = (e) => {
      setText(e.target.value)
    }
  return (
    <>
    <div className="flex justify-center items-center  h-screen w-screen" style={{background:theme}}>
       <div className='w-[650px] h-[520px] flex flex-col justify-center items-center gap-8 bg-white py-2 shadow-amber-100 rounded-2xl'>
        <div className='flex flex-col justify-center items-center'>
        <h1 className='flex text-3xl gap-2 font-bold' style={{color:theme}}>Hello {text} <FaHandsClapping /></h1>
        <p className='text-xl '>Welcome to your dashboard</p>
        <input type="text" placeholder='Enter your name' onChange={userName} className='px-2 py-1 rounded-2xl shadow-2xl outline-none  focus:border-amber-200' />
      </div>
    
    <div className='flex  justify-center items-center gap-5'>
      <div className='flex flex-col gap-5' >
         <Card theme={theme}/>
        <Count count={count} increment={increment} decrement={decrement}/>
      </div>
      <div className='flex flex-col gap-5' >
         <Progress level={level} score={count} total={total} />
        <Theme setTheme={setTheme} />
      </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Content