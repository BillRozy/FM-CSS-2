import React from 'react'
import logo from '../assets/logo.svg'

export default function Logo({ inFooter }) {
  return (
    <img src={logo} alt="Loopstudios Logo" className={`h-6 ${!inFooter ? 'tablet:h-8' : ''}`} />
  )
}
