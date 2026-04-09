import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


import { Catalog } from './page/Catalog'
import { Cart } from './page/Cart'

import { Header } from './components/Header'
import { Footer } from './components/Footer'

// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Catalog/>}>
        <Route path='./Cart' element={<Cart/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
    
  )
}

export default App
