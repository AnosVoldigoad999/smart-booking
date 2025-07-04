import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BookingProvider } from './BookingContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookingProvider>
    <App />
    </BookingProvider>
  </StrictMode>,
)
