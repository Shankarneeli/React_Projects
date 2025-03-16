import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState('#fea665');

  

  return (
    <div className="screen" style={{backgroundColor:color}}>
      <div className="footerBox">
        <button className="btn black"onClick={()=>{setColor('black')}}>Black</button>
        <button className="btn red"onClick={()=>{setColor('red')}}>Red</button>
        <button className="btn green"onClick={()=>{setColor('darkGreen')}}>Green</button>
        <button className="btn blue"onClick={()=>{setColor('#063970')}}>Blue</button>
        <button className="btn olive"onClick={()=>{setColor('olive')}}>Olive</button>
        <button className="btn orange"onClick={()=>{setColor('#ec841a')}}>Orange</button>
        <button className="btn violet"onClick={()=>{setColor('#a731e2')}}>violet</button>
        <button className="btn lavender"onClick={()=>{setColor('#C3B1E1')}}>lavender</button>
        <button className="btn pink"onClick={()=>{setColor('#b85b9f')}}>pink</button>
      </div>
    </div>
  );
}

export default App;
