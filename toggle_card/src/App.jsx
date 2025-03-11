import { useState } from 'react'
import cc from '../public/cc.png'; 
import './App.css'

function App() {
  let [toggle,setToggle] = useState(false);

  function toggleHandler(){
    console.log("Toggle Button Clicked...");
    if(toggle){
      setToggle(false);
    }else{
      setToggle(true);
    }
  }
  return (
    <>
     <div className={toggle == true? "center" : "d-none"}>
        <img src={cc} className='center-img' alt="Choclate Cake" />
        <div className="padding">
        <h3>This is a Toggle Card</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem vitae nostrum numquam maxime dolorem est.adipisicing </p>
        </div>
     </div>

      <button className='toggle' onClick={toggleHandler}>Toggle Here !({toggle == true? 'On': 'Off'})</button>
    </>
  )
}

export default App
