import { useMemo, useRef, useState } from 'react'
import './App.css'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'

function Overlay({ ref, open }) {
  return (
    <div ref={ref} className={`fixed inset-0 bg-black/100 transition-all w-full h-0 opacity-0 z-10 ${open ? 'h-full opacity-100' : ''}`}></div>
  )
}

function App() {
  const overlayRef = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const isOverlayOpen = useMemo(() => {
    return menuOpen
  }, [menuOpen])
  return (
    <div className='max-w-[1440px] mx-auto'>
      <Overlay ref={overlayRef} open={isOverlayOpen}></Overlay>
      <Header overlayRef={overlayRef} menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  )
}

export default App
