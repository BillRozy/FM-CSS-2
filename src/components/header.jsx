import hamburger from '../assets/icon-hamburger.svg'

import close from '../assets/icon-close.svg'
import { createPortal } from 'react-dom'
import Logo from './logo'
import Menu, { OverflowMenu } from './menu'

function HeaderInternal({ menuOpen, setMenuOpen, inOverlay }) {
  return (
    <div className='h-[650px] w-full relative p-300 pt-500 tablet:p-1000 tablet:pt-800 desktop:px-[165px] desktop:py-800'>
      <div className={`absolute inset-0 w-full h-full bg-cover bg-center bg-blend-multiply tablet:bg-black/40 -z-10 bg-hero-mobile tablet:bg-hero-desktop ${inOverlay ? 'opacity-0' : 'opacity-100'}`}></div>
      <div className={'w-full flex flex-col justify-between' + (inOverlay ? ' h-[399px] tablet:h-[375px]' : ' h-[383px] tablet:h-[440px]')}>
        <header className='flex flex-row justify-between items-center w-full text-white'>
          <Logo></Logo>
          <button type='button' onClick={() => setMenuOpen(!menuOpen)} className="desktop:hidden">
            <img src={menuOpen ? close : hamburger} alt="Menu" className={!menuOpen ? 'h-4 tablet:h-6' : 'size-[18px] tablet:size-6'} />
          </button>
          <Menu></Menu>
        </header>
        {inOverlay ? <OverflowMenu></OverflowMenu> : (
          <section aria-label='Our motto' className='m-0 inline-block text-preset3 tablet:text-preset1 text-white uppercase font-light p-300 py-[18px] border-2 border-white max-w-[650px] desktop:px-500 desktop:py-[42px] desktop:h-[278px]'>
            Immersive experiences that deliver
          </section>
        )}
      </div>
    </div>
  )
}

export default function Header({ overlayRef, menuOpen, setMenuOpen }) {
  return (
    <>
      <HeaderInternal menuOpen={menuOpen} setMenuOpen={setMenuOpen}></HeaderInternal>
      {
        menuOpen && overlayRef && createPortal(
          <HeaderInternal menuOpen={menuOpen} setMenuOpen={setMenuOpen} inOverlay></HeaderInternal>,
          overlayRef.current
        )
      }
    </>


  )
}
