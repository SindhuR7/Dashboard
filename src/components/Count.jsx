import React, { useState } from 'react'
import Button from './Button'

const Count = () => {

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

  return (
    <>
    <h1>Counter</h1>
    <h2>{count}</h2>
    <Button BtnName='Increment' BtnColor='red' BtnHandle={increment}/>
    <Button BtnName='Decrement' BtnColor='green' BtnHandle={decrement}/>
    </>
  )
}

export default Count