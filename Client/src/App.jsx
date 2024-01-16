import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Main from './Layout/Main'
import Home from './Pages/HomePage'
import Detail from './Pages/Detail'
import Wishlist from './Pages/Wishlist'
import Basket from './Pages/Basket'
import AddPage from './Pages/AddPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/:id' element={<Detail />}></Route>
          <Route path='/wishlist' element={<Wishlist />}></Route>
          <Route path='/basket' element={<Basket />}></Route>
          <Route path='/add' element={<AddPage />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
