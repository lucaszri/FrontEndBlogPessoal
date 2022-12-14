import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './paginas/home/Home';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Login from './paginas/login/Login';
import './App.css';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaTema from './components/temas/listatema/Listatema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import CadastroPost from './components/postagens/cadastropost/CadastroPost';
import CadastroTema from './components/temas/cadastrotema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarpostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletartema/DeletarTema';
import store from './store/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
    <Router>
        <Navbar />
        <div>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Login />} />
        <Route path='/cadastrousuario' element={<CadastroUsuario />} />
        <Route path='/Tema' element={<ListaTema />} />
        <Route path='/Postagem' element={<ListaPostagem />} />
        <Route path="/formularioPostagem" element={<CadastroPost />} />
          <Route path="/formularioPostagem/:id" element={<CadastroPost />} />
          <Route path="/formularioTema" element={<CadastroTema />} />
          <Route path="/formularioTema/:id" element={<CadastroTema />} />
          <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
          <Route path="/deletarTema/:id" element={<DeletarTema />} />

      </Routes>
      </div>
        <Footer />
    </Router>
    </Provider>
  );
}

export default App;
