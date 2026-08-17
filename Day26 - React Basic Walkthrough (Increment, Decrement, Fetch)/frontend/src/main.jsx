/*******************************************************************************************************
 *************************************** REACT MAIN ENTRY POINT (`main.jsx`) ***************************
 *
 * Concepts Covered in Day 26:
 * - React 18 Concurrent Root API (`createRoot`)
 * - Virtual DOM Initialization & Mount Node Binding (`#root`)
 * - Client-Side Routing Context Provider (`BrowserRouter`)
 * - Import of Global Design Tokens & Stylesheet (`index.css`)
 *******************************************************************************************************/

import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
