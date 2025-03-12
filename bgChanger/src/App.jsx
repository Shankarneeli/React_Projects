import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState('#A27B5C');

  

  return (
    <div className="screen" style={{backgroundColor:color}}>
      <div className="footerBox">
        <button className="btn black"onClick={()=>{setColor('black')}}>Black</button>
        <button className="btn red"onClick={()=>{setColor('red')}}>Red</button>
        <button className="btn green"onClick={()=>{setColor('green')}}>Green</button>
        <button className="btn blue"onClick={()=>{setColor('blue')}}>Blue</button>
        <button className="btn olive"onClick={()=>{setColor('olive')}}>Olive</button>
        <button className="btn orange"onClick={()=>{setColor('orange')}}>Orange</button>
        <button className="btn violet"onClick={()=>{setColor('violet')}}>violet</button>
        <button className="btn lavender"onClick={()=>{setColor('lavender')}}>lavender</button>
        <button className="btn pink"onClick={()=>{setColor('pink')}}>pink</button>
      </div>
    </div>
  );
}

export default App;
