import React from 'react'
import Home from './pages/Home'
import ProductForm from './pages/ProductForm'
import ProductPage from './pages/ProductPage'
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Error from './components/Error'
export default function App() {
  return (
   <BrowserRouter>
   <NavBar />
   
   <Routes>
   <Route path='/' element={<Home />}/>
   <Route path='/product/:id' element={<ProductPage />}/>
   <Route path='/add-product' element={<ProductForm />}/>
   <Route path='/dashboard' element={<Dashboard />}/>
    <Route path='*' element={<Error />}/>
   </Routes>
   
   </BrowserRouter>
  )
}
