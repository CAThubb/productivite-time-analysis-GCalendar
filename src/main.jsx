import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createClient } from '@supabase/supabase-js'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { BrowserRouter } from 'react-router-dom'

const supabase = createClient(
  "https://bchulowmrdxdogstdoqy.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjaHVsb3dtcmR4ZG9nc3Rkb3F5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY3NDI4NzEsImV4cCI6MjAwMjMxODg3MX0.8yngY99uRgpwN-B5xANR8nm3Y0vZfTwOdd7WGKm-o64"
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SessionContextProvider supabaseClient={supabase}>
        <App />
      </SessionContextProvider>
    </BrowserRouter>  
  </React.StrictMode>,
)
