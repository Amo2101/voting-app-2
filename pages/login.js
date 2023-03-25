import React,  { useState } from 'react'
import MainLayout from "../layout/mainLayout"
import "../styles/login.css"

function Login() {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(`Username: ${username}\nPassword: ${password}`);
    // Do something with the login credentials here, like send a POST request to a server
  }

  return (
    <MainLayout>
    <form className='login-form' onSubmit={handleSubmit}>
      <label>
        Email:
        <input className='email-input' type="email" value={username} onChange={handleUsernameChange} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <button className='submit-button' type="submit">login</button>
    </form>
    </MainLayout>
  );
}


export default Login