import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { HelloWorldApp } from './HelloWorldApp'
// import { FirstApp } from './FirstApp'
import './styles.css'
import { CounterApp } from './CounterApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <HelloWorldApp/> */}
    <CounterApp value={10} />
  </StrictMode>,
)
