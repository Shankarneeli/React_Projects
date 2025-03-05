import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(7)

  let addValue = ()=>{
    if(count< 26){
      setCount(count + 1);
    }
  }
  let RemoveValue = ()=>{
    if(count > 0){
      setCount(count - 1);
    }
  }

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={addValue}>Add {count}
        </button>
        <button onClick={RemoveValue}>Remove {count}
        </button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
