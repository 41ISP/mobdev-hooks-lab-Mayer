import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './components/Header'
import ShelfScreen from './pages/ShelfScreen'


function App() {
  const [count, setCount] = useState(0)

  return (

<>

  <div className="app">

        <Header />

        <ShelfScreen />
  </div>
</>

  )
}

export default App
