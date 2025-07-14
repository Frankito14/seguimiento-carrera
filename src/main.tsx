import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ModalProvider } from './context/ModalContext.tsx'
import { StorageProvider } from '@context/StorageContext.tsx'
import { BrowserRouter } from "react-router";
import App from './app/App.tsx'
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <StorageProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </StorageProvider>
    </BrowserRouter>
  </StrictMode>,
)
