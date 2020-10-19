// import React, { useState, useEffect } from 'react'
// import Chakra from '../components/Chakra'

// function testing(Component) {
//   const [width, setWidth] = useState(0)
//   useEffect(() => {
//     const handleWindowResize = () => setWidth(window.innerWidth)
//     window.addEventListener('resize', handleWindowResize)
//     return () => window.removeEventListener('resize', handleWindowResize)
//   }, [])
//   const breakpoint = 500

//   // Return a function from the effect that removes the event listener

//   return width < breakpoint ? (
//     <Chakra />
//   ) : (
//     <div>
//       <p>Hola</p>
//     </div>
//   )
// }

// export default testing
