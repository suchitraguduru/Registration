import React from 'react';
import { useState } from "react";
import './App.css';
import Register from './pages/Register';
import Profile from './pages/Profile';

function App() {
  const [profile,setProfile] = useState(false);
  const [email, setEmail] = useState("");
  const updateEmail = (value)=>{
    setEmail(value);
  }
  const updateProfile = (value)=>{
    setProfile(value);
  }
  return (
    <div className="App">
      {profile ? <Profile email ={email} updateProfile={updateProfile}/>:<Register updateEmail={updateEmail} updateProfile={updateProfile}/>}
    </div>
  );
}

export default App;
