import React from 'react'
import Button from './Button'

export const Card = ({theme}) => {
  return (
    <>
    <h2>Your Theme</h2>
    <Button BtnName={theme} BtnColor={theme} textColor='#fff'/>
    </>
  )
}
