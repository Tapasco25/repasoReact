import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { TodoApp } from './08-useReducer/TodoApp'
// import { Padre } from './07-tarea-memo/Padre'
// import { Hijo } from './07-tarea-memo/Hijo'
// import { CallbackHook } from './06-memos/CallbackHook'
// import { MemoHook } from './06-memos/MemoHook'
// import { Memorize } from './06-memos/Memorize'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { CounterApp } from './01-useState/CounterApp'
// import { HooksApp } from './HooksApp'
// import './08-useReducer/intro-reducer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoApp/>
  </StrictMode>,
)