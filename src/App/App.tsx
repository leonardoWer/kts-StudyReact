import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Page1 from "./pages/Page1";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div>
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
        </div>
        <h1>Vite + React</h1>
        <h3>by leonardo_Wer</h3>
        <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              likes {count}
            </button>
        </div>

        <Page1/>
    </>
  )
}

export default App
