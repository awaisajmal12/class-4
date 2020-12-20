// eslint-disable-next-line
import react, {useState} from 'react';
import './App.css';
import {Button} from './Button.js';

function App() {
  let [count, setCount] = useState(0)
  let [islight, setlight] = useState(true)

  return (
    <div className= {` ${islight ? 'light' : 'box'}`}>
        <h1> light = {islight ? 'On' : 'Off'} </h1>
     <Button counter={count}/>
      <br/>
      <button onClick={()=> setCount(++count) }>
        update counter </button>
        <br/>
        <button onClick= {()=> setlight(!islight) }>
          light 
        </button>
    </div>
  );
}

export default App;
