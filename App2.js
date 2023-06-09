import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './styles/apptwo.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import MainLayout from'./layout/mainLayout'

import Login from './components2/login_component'
import SignUp from './components2/signup_component'

function App2() {
  return (
    
      <div className="App">
        
        
<MainLayout></MainLayout>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
          </div>
        </div>
      </div>
    
  )
}

export default App2
