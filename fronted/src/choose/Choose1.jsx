import React from 'react'
import Navbar from '../component/Navbar'
import Place from '../component/Place'
import Footer from '../component/Footer'
import Temple from '../component/Temple'

function Choose1() {
  return (
    <>
    <Navbar/>
   <div className='min-h-screen'>
    
    <Place/>
    {/* <Temple/> */}

   </div>
    <Footer/>
    </>
  )
}

export default Choose1