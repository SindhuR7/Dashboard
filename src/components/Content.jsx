import React, { useState } from 'react'
import Count from './Count'
import Theme from './Theme'
import { Card } from './Card'

const Content = () => {
  const [theme,setTheme] = useState("")
  
  return (
    <>
    <Card theme={theme}/>
    <Count/>
    <Theme setTheme={setTheme} />
    </>
  )
}

export default Content