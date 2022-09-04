import React, { ChangeEvent, useState, useEffect} from 'react'
import './Login.css';
import { Grid, Box, Typography, TextField, Button} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import useLocalStorage from 'react-use-localstorage';

function Login() {

    let history = useNavigate();
    const [token, setToken] = useLocalStorage('token');

    const [userLogin, setUserLogin] = useState<UserLogin>({
        id: 0, usuario: '', senha: '', token: ''
    })

    function updateModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(()=> {
        if(token != '') {
            history('/home')
        }
    }, [token]) 

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault();
        try {
            await login(`/usuarios/logar`, userLogin, setToken)

            alert('Usuario logado com sucesso!')
        } catch (error) {
            alert('ERRO! Login incorreto, tente novamente!')
        }
    } 

  return (

        <Box className='container'>
            <Box className='container-menu'>
                <form className='form-login' onSubmit={onSubmit}>
                    <Typography className='texto-entrar'> <img src="https://i.ibb.co/LnQbc3R/Logotipo-empresa-de-programa-o-sistemas-e-tecnologia-5.png" alt="" /> </Typography>
                    <TextField className='input-form' value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updateModel(e)} id='usuario' label='E-mail' name='usuario'/>
                    <TextField className='input-form' value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updateModel(e)} id='senha' label='Senha'  name='senha'  type='password' />
                    <Box>
                            <Button className='btn-login' type='submit'>
                                Entrar
                            </Button>

                    </Box>
                </form>
                <Box className='cadastre-login'>
                    <Box className='txt1-login'>
                        <Typography>Não tem uma conta?</Typography>
                    </Box>
                    <Box className='txt1-login1'>
                    <Link to='/cadastrousuario'>
                    <Typography>Cadastre-se!</Typography>
                    </Link>
                    </Box>
                </Box>
            </Box>
        </Box>

  )
}

export default Login
