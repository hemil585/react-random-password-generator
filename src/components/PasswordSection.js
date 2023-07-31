import React, { useState , useRef } from 'react'
import './PasswordSection.css'

function PasswordSection() {

  const [randomPassword,setRandomPassword] =  useState('') 
  const inputRef = useRef(null);

  const randomPasswordGenerator = () => {
    const chars = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const passwordLength = 14;
    let password = ''
    for(let index = 0; index < passwordLength; index++){
        const randomNum = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNum,randomNum + 1)
    }
    console.log(password);
    setRandomPassword(password)
  }
  

  const copyPassword = () => {
    if(!randomPassword){
      alert('First generate the password')
    }else{
      if (inputRef.current) {
        inputRef.current.select();
        inputRef.current.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(inputRef.current.value);
        alert('Password copied: ' + inputRef.current.value);
      }
    }
  }

  return (
    <div className='main'>
      <div className='password-container'>
        <div className='input-container'>
          <input type='text' value={randomPassword} id='input' ref={inputRef} readOnly></input>
          <i className="far fa-2x fa-copy" id="copy" onClick={copyPassword}></i>
        </div>
          <button className='generate-btn' onClick={randomPasswordGenerator}>Generate</button>
      </div>
    </div>
  )
}

export default PasswordSection