import '../styles/globals.css'
import React, { useState, useEffect } from 'react'
import Chakra from '../components/Chakra'

const MyApp = ({ Component, pageProps }) => {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])
  const breakpoint = 600

  // Return a function from the effect that removes the event listener

  return width < breakpoint ? (
    <Component {...pageProps} />
  ) : (
    <div>
      <h1>
        Para una mejor experiencia solo me veo en celus ueee, también tu "trais" un ipad de celular
        cainal!
      </h1>
    </div>
  )
}

export default MyApp
