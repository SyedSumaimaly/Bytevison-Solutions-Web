import React from 'react'

const Button = ({children, handleOnClick}) => {
  return (
    <button className='primary_button' onClick={handleOnClick}>{children}</button>
  )
}

export default Button
