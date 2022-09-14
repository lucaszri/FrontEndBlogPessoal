import React, { ChangeEvent, useState, useEffect} from 'react'
import './Login.css';
import { Grid, Box, Typography, TextField, Button} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import useLocalStorage from 'react-use-localstorage';
import { addToken } from '../../store/tokens/actions';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';


function Login() {

    let history = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');

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
            dispatch(addToken(token));
            history('/home')
        }
    }, [token]) 

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault();
        try {
            await login(`/usuarios/logar`, userLogin, setToken)
            toast.success('Usuário logado com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
                });
        } catch (error) {
            toast.error('Dados do usuário inconsistentes. Erro ao logar!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
                });
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
