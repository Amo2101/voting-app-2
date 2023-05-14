import React from 'react'
import MainLayout from "../layout/mainLayout"
import FooterLayout from "../layout/footerLayout"
import { Link, useNavigate } from "react-router-dom";
import "../styles/profile.css"
import Feeds from '../components/feeds/Feeds';
import Userinfo from '../components/userinfo/Userinfo';



const Profile = () => {
  return (
    <div className='main'>
    <MainLayout/>
<div className='profile-container'>

<div className='top-portion'>
    <div className='user-profile-bg-image'>
        <img id='prf-bg-img' src='https://www.sgdsb.on.ca/upload/images/vote.jpg'></img>
    </div>
    <div className='user-profile-img'>
        <img id='prf-img' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000"></img>
    </div>

<div className='userNam'>
    Ahmed
</div>

</div>



<div className='bottom-portion'>
    <div className='right-side'>
    
    </div>



    <div className='left-side'>
        <Userinfo/>
    </div>
</div>


</div>

<FooterLayout></FooterLayout>
    </div>
    
  )
}

export default Profile