import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='/favoritos' element={<h1>Favoritos</h1>}/>
      <Route path='/' element={<App/>}/>
    </Routes>
  </BrowserRouter>

  </React.StrictMode>,
)
