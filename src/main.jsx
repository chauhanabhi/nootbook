import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer, toast } from 'react-toastify';
import App from './App.jsx'
import { BrowserRouter as Router }  from 'react-router-dom'
import { ScrolltoTop } from './components/index.jsx'
import { FilterProvider } from './context'
import { CartProvider } from './context'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Router>
  <CartProvider>
  <FilterProvider>
  <ScrolltoTop/>
  <ToastContainer closeButton={false} autoClose={2000} />
    <App />
    </FilterProvider>
    </CartProvider>
    </Router>
  </StrictMode>,
)
