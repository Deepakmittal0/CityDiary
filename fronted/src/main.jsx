import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='dark:bg-slate-900 dark:text-white'>
  <BrowserRouter>
  <App/>
  </BrowserRouter></div>
)
