import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import { Header } from './components/Header/Header'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Favorites } from './routes/Favorites'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/favoritos' element={<Favorites/>}/>
      <Route path='/' element={<App/>}/>
    </Routes>
  </BrowserRouter>

  </React.StrictMode>,
)
