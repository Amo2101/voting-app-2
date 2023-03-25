import  React, { useState, useEffect }  from "react" 
import Buttonupload from '../components/uploadButton'
import "../styles/registration.css"
import MainLayout from "../layout/mainLayout"
import { Link } from "react-router-dom";
import Axios from "axios";



function Form() {

    const addVoter = () =>{
Axios.post('http://localhost:3001/create',{name:name, 
  lastName:lastName, password:password, email:email, address:address, zip:zip, idNum: idNum, phoneNumber:number, jmbg:JMBG })
  .then(()=>{
    console.log("success");
  });
    };

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [zip, setZip] = useState(0);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [idNum, setIdNum] = useState("");
    const [number, setNumber] = useState("");
    const [JMBG, setJMBG] = useState('');
  

  const initialValues={name:"",lastName:"", email:"", password:"", address:""}; 
  
  const [formValues, setFormValues]=useState(initialValues);
  const [formErrors, setFormErrors]=useState({});
const [isSubmit, setIsSubmit]= useState(false);

  const handleChange = (e)=>{
    
    const {name, value}= e.target;
    setFormValues({...formValues, [name]: value});
    
       };

const handleSubmit = (e) =>{
    e.preventDefault ();
setFormErrors(validate(formValues));
    setIsSubmit(true);
};

useEffect(()=>{
    console.log(formErrors);
if(Object.keys(formErrors).length === 0 && isSubmit){
    console.log(formValues);
}
},[formErrors]);

const validate = (values)=>{
   const errors= {};
   const regex=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
if(!values.name){
    errors.name="First name is required";
}
if(!values.lastName){
    errors.lastName="Last name is required";
}
if(!values.email){
    errors.email="Email is required";
}
if(!values.password){
    errors.password="Password is required";
}
return errors;
};

  return (

    <MainLayout>

<div className="form">
    
    <form onSubmit={handleSubmit}>
     <div className="form-body">
         <div className="username">
             <label className="form__label" for="name"> name </label>
             <input name="name" className="form__input" type="text" id="name" placeholder="name" value={formValues.name} onChange={handleChange } />
         </div>
         <p className="error">{formErrors.name}</p>
         <div className="lastname">
             <label className="form__label" for="lastName">Last Name </label>
             <input name="lastName"  type="text"  id="lastName"  className="form__input"placeholder="LastName" value={formValues.lastName}onChange={handleChange}/>
         </div>
         <p className="error">{formErrors.lastName}</p>
         <div className="email">
             <label className="form__label" for="email">Email </label>
             <input name="email"  type="email" id="email" className="form__input" placeholder="Email" value={formValues.email}onChange={handleChange}/>
         </div>
         <p className="error">{formErrors.email}</p>
         <div className="password">
             <label className="form__label" for="password">Password </label>
             <input name="password" className="form__input" type="password"  id="password" placeholder="Password" value={formValues.password}onChange={handleChange}/>
         </div>
         <p className="error">{formErrors.password}</p>
         <div className="confirm-password">
             <label className="form__label" for="confirmPassword">Confirm Password </label>
             <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
         </div>
         <div className="adress">
             <label className="form__label" for="address">address </label>
             <input name="address" className="form__input" type="text" id="address" placeholder="address" value={formValues.address} onChange={handleChange}/>
         </div>
         <div className="zip">
             <label className="form__label" for="zip">ZIP </label>
             <input className="form__input" type="text" id="zip" placeholder="zip"/>
         </div>
         <div className="number">
             <label className="form__label" for="number">Phone number </label>
             <input className="form__input" type="text" id="number" placeholder="number"/>
         </div>
         <div className="idNum">
             <label className="form__label" for="idNum">ID number </label>
             <input className="form__input" type="text" id="idNum" placeholder="idNum"/>
         </div>
         <div className="JMBG">
             <label className="form__label" for="JMBG">Identification number </label>
             <input className="form__input" type="text" id="JMBG" placeholder="JMBG"/>
         </div>
         
     </div>
     
<p>Upload ID picture</p>
<Buttonupload></Buttonupload>
<div class="footer">
         <button onClick={addVoter} type="submit" className="btn">Register</button>
     </div>

     <div className="login-button">

<p>Already have an account?</p>

<Link to="/login">
<button >Log in</button>
</Link>
</div>
</form>
 </div> 
    </MainLayout>


    
        
    
  )
}

export default Form