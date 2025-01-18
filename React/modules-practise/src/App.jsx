import './App.css'
import {add, substract, divide, multiply} from './math';

function App() {

  return (
    <>
      <ul>
        <li>{add(10, 5)}</li>
        <li>{substract(10, 5)}</li>
        <li>{divide(10, 5)}</li>
        <li>{multiply(10, 5)}</li>
      </ul>
    </>
  )
}

export default App
