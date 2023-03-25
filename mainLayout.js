import React from 'react'
import Navbar from '../components/navbar'
function mainLayout({children}) {
  return (
    <div>
        <Navbar></Navbar>
       <div>{children}</div>
        </div>
    
  )
}

export default mainLayout