// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
var foods = ["hummus", "tofu", "noodles"];
const fname = "Sebastian";
const lname = "Łysik"
const date = new Date(); 
const currentYear = date.getFullYear();
var number = Math.floor(Math.random() * 101); 

function App() {

  return (
    <>
        <h1 contentEditable="true" spellCheck="false">My favourite foods</h1>
        <ul>
          {foods.map( (food, index) =>{
            return <li key={index}>{food}</li>
          })}
        </ul>
        <p>Your lucky number between 1 and a 100 is: {number}</p>
        <p>Created by {fname + " " + lname}</p>
        <p>Copyright {currentYear}</p>
    </>
  )
}

export default App
