import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx'
import ResumeRedirect from './support-components/ResumeRedirect.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App />} />
        <Route path="/Aman-Resume-v2.pdf" element={<ResumeRedirect />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
