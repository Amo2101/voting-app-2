import React, {Component} from "react";
import MainLayout from "../layout/mainLayout"
import "../styles/profile.css"
import "../components/userinfo/userinfo.css"
import FooterLayout from "../layout/footerLayout"

export default class UserDetails extends Component{


    constructor(props){
        super(props);
        this.state = {
            userData:"",
        }
    }

  componentDidMount(){
    fetch("http://localhost:6001/userData",{
      method:"POST",
      crossDomain:true,
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify({
        token:window.localStorage.getItem("token"),


      }),
      

    }).then((res)=>res.json())
    .then((data)=>{
      console.log(data,"userData");
      this.setState({userData: data.data});
    });
  }
  render(){
    return(
        
        <div>

            <MainLayout></MainLayout>

            
           



            <div className='main'>
  
<div className='profile-container'>

<div className='top-portion'>
    <div className='user-profile-bg-image'>
        <img id='prf-bg-img' src='https://www.sgdsb.on.ca/upload/images/vote.jpg'></img>
    </div>
    <div className='user-profile-img'>
        <img id='prf-img' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000"></img>
    </div>

<div className='userNam'>
{this.state.userData.fname}
</div>

</div>



<div className='bottom-portion'>
    <div className='right-side'>
    
    </div>



    <div className='left-side'>
       
    <div className='main-user-info-container'>
       <h2> User info</h2>
       <hr id='hr-info'></hr>
       <div className='info-container'>
       <h6>Name</h6>
        <h5>{this.state.userData.fname}</h5>

        <h6>Last name</h6>
        <h5>{this.state.userData.lname}</h5>

        <h6>Email</h6>
        <h5>{this.state.userData.email}</h5>
       

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


    </div>
</div>


</div>

<FooterLayout></FooterLayout>
    </div>





        </div>
    )
  }

}