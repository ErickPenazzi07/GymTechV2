import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Login from './pages/Login.jsx';
import Registrar from './pages/Registrar.jsx';
import Suplementos from './pages/Suplementos.jsx';
import Roupas from './pages/Roupas.jsx';
import Equipamentos from './pages/Equipamentos.jsx';
import Carrinho from './pages/Carrinho.jsx';
import Perfil from './pages/Perfil.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
             <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registrar" element={<Registrar />} />
          <Route path="/suplementos" element={ <Suplementos />} />
          <Route path="/roupas" element={<Roupas/>} />
          <Route path="/equipamentos" element={<Equipamentos/>} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </BrowserRouter>
  </StrictMode>,
)
