import React, { useEffect } from 'react';
import { Typography, Box, Grid, Button } from '@mui/material';
import './Home.css';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import ModalPostagem from '../../components/postagens/modalpostagem/ModalPostagem';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';

function Home() {
    let history = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            history("/login")

        }
    }, [token])

    return (
        <>
            <Box className="container-home">
                <Box className="inicioHome">
                    <Box className="txtHome">
                        <Typography className='fraseHome'> Hi everyone, my name is </Typography>
                        <Typography className='nomeHome'> LUCAS  </Typography>
                        <Typography className='nomeHome'> SOUZA </Typography>
                        <Typography className='fraseHome'> i'm passionate  </Typography>
                        <Typography className='fraseHome'> FULLSTACK DEVELOPER </Typography>
                            <Box className='modalHome'>
                                <Box className='btnModal'>
                                    <ModalPostagem />
                                </Box>
                                <Box className="btnVerpost">
                                <Link className='textDecorationNone' to="/Postagem">
                                    <Button className='btnVerPost'>Ver Postagens</Button>
                                </Link>
                                </Box>
                            </Box>
                    </Box>
                    <Box className="imgHome">
                        <img src="https://i.ibb.co/cN5gh16/Design-sem-nome-36.png" alt="" />
                    </Box>
                </Box>
                <Box className="tabHome">
                    <TabPostagem />
                </Box>

            </Box>
        </>
    );
}

export default Home;