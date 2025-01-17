import './App.css'
import Heading from './heading';

function App() {
  const d = new Date();
  let hour = d.getHours();
  let greeting = " "; 
  const customStyle = {
    color: "black"
  }

  if(hour < 12){
    greeting = "Good morning";
    customStyle.color = "red";
  }
  else if(hour > 18){
    greeting = "Good afternoon";
    customStyle.color = "green";
  }
  else{
    greeting = "Good night"
    customStyle.color = "blue";
  }

  return (
    <>
      <h1 style={customStyle}>{greeting}</h1>
      <Heading />
    </>
  )
}

export default App
