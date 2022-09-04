import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
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
                        <Box className='borda-btn'>
                            <Typography>
                                Postagens
                            </Typography>
                        </Box>
                        <Box className='borda-btn'>
                            <Typography>
                                Temas
                            </Typography>
                        </Box>
                        <Box className='borda-btn'>
                            <Typography>
                                Cadastrar temas
                            </Typography>
                        </Box >
                       <Link to='/login' className='text-decoration-none'>
                            <Box className='borda-btn'>
                                <Typography>
                                    Logout
                                </Typography>
                            </Box>
                       </Link>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;