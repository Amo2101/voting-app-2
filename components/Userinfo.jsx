import React from 'react'
import '../userinfo/userinfo.css'

function Userinfo() {
  return (
    <div className='main-user-info-container'>
       <h2> User info</h2>
       <hr id='hr-info'></hr>
       <div className='info-container'>
       <h6>Name</h6>
        <h5>Ahmed</h5>

        <h6>Last name</h6>
        <h5>Pilav</h5>

        <h6>Address</h6>
        <h5>Gornja Josanica I 6D</h5>
       

       <div className='from'>
       <h6>From</h6>
       <h5>Bosnia</h5>
       </div>
       <div className='relation'>
       <h6>ID</h6>
       <h5>512512321</h5>
       </div>
       </div>
    </div>
  )
}

export default Userinfo