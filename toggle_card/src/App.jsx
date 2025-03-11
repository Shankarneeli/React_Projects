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
        <h3> Choco Velvet Cake </h3>
        <p>Velvety dark chocolate layers 🍫 infused with rich ganache 🍫, offering a symphony of decadence 🎶 with every mouthful. Pure delight! ✨ </p>
        </div>
     </div>

      <button className='toggle' onClick={toggleHandler}>Toggle Here !({toggle == true? 'On': 'Off'})</button>
    </>
  )
}

export default App
