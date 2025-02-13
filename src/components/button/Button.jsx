import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

function Button({text}) {
  return (
    <>
        <Link to='#' className='banner_but  '>
            {text}
        </Link>
    </>
  )
}

export default Button