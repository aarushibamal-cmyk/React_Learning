import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  // usage of hooks to change the state and propogate into the ui and DOM

  // use state return two values variable and function so write in format of array
 let [counter , setCounter] = useState(10)

  // let counter = 10;

  function addValue(){
    console.log("Value added");
    // counter = counter +1; if we used this then use let and not used then we can use const
    // console.log(counter);
    setCounter(counter+1)
  }

  const decreaseValue = ()=>{
    console.log("Decreased Value");
    // counter = counter -1;
    if(counter<=0){
      setCounter("negative value");
    }
    else{
    setCounter(counter-1);
    }
  } 
  return (
    <>
      <h1>Counter project</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={
        addValue
      }>Add value: {counter}</button>
      <br/>
      <button onClick={decreaseValue} >Decrease Value: {counter}</button>
      <p> footer: {counter}</p>
    </>
  )
}

export default App

/* Ui updation is controlled by React
if we dont use hooks the ui will not update 
but the counter value is decrased and increased
*/
