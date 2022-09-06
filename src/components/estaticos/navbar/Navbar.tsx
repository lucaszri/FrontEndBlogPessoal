import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'
import useLocalStorage from 'react-use-localstorage';

function Navbar() {
    const [token, setToken] = useLocalStorage('token');
    let history = useNavigate()

    function goLogout() {
        setToken('')
        alert('Usuário deslogado')
        history('/login')
    }
    
    return (
        <>
            <AppBar>
                <Toolbar className='navbar-barra'>
                    <Box className='img-navbar'>
                            <img src="https://i.ibb.co/P6fcyZT/Logotipo-empresa-de-programa-o-sistemas-e-tecnologia-3.png" alt="" />
                    </Box>
                    <Box className='itens-navbar'>
                        <Link to='/home' className='text-decoration-none'>
                            <Box className='borda-btn'>
                                <Typography>
                                    Home
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/Postagem' className='text-decoration-none'>
                            <Box className='borda-btn'>
                            <Typography>
                                Postagens
                            </Typography>
                            </Box>
                            </Link>
                        
                        <Box className='borda-btn'>
                        <Link to='/Tema' className='text-decoration-none'>
                            <Typography>
                                Temas
                            </Typography>
                        </Link>
                        </Box>
                        <Box className='borda-btn'>
                        <Link to='/formularioTema' className='text-decoration-none'>
                            <Typography>
                                Cadastrar temas
                            </Typography>
                            </Link>
                        </Box >
                            <Box className='borda-btn' onClick={goLogout}>
                                <Typography>
                                    Logout
                                </Typography>
                            </Box>

                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;