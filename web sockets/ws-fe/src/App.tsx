import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const sendMessage = () =>{

  }

  useEffect(()=>{
    const wss = new WebSocket("ws://localhost:8080");
  },[])

  return (
    <div>
      <h2>Basic Chat Application</h2>
      <div className='flex items-center gap-5'>
      <input className='flex items-center gap-5' type="text" placeholder='Enter your message' />
      <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  )
}

export default App
