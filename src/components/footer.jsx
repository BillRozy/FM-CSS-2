import React from 'react'
import Logo from './logo'
import Menu from './menu'
import facebook from '../assets/icon-facebook.svg'
import twitter from '../assets/icon-twitter.svg'
import pinterest from '../assets/icon-pinterest.svg'
import instagram from '../assets/icon-instagram.svg'

function SocialLinks() {
  return (
    <div className='flex gap-200'>
      <a href="https://www.facebook.com/"><img src={facebook} alt="Facebook" className='size-6' /></a>
      <a href="https://www.twitter.com/"><img src={twitter} alt="Twitter" className='size-6' /></a>
      <a href="https://www.pinterest.com/"><img src={pinterest} alt="Pinterest" className='size-6' /></a>
      <a href="https://www.instagram.com/"><img src={instagram} alt="Instagram" className='size-6' /></a>
    </div>
  )
}
export default function Footer() {
  return (
    <footer className="p-[56px] tablet:px-1000 tablet:py-[43.5px] desktop:px-[165px] desktop:py-[45px] desktop:pb-[41px] bg-black flex flex-col gap-500 tablet:gap-300 items-center text-white tablet:grid tablet:grid-cols-2 tablet:grid-rows-2 tablet:items-start">
      <div className='order-1'><Logo inFooter></Logo></div>
      <div className='order-3 tablet:order-2 tablet:place-self-end'><SocialLinks></SocialLinks></div>
      <div className='order-2 tablet:order-3'><Menu inFooter></Menu></div>
      <span className='text-preset6 opacity-50 order-4 -mt-300 tablet:mt-0 tablet:place-self-end'> © 2021 Loopstudios. All rights reserved. </span>
    </footer>
  )
}
