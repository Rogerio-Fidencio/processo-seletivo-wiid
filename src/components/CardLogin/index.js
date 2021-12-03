import './style.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



export default function CardLogin() {
    const [ localUser, setLocalUser] = useState();
    const [ localPassword, setLocalPassword] = useState();
    const { logado, setLogado } = useAuth();
    const history = useHistory();

    function handleSubmit() {

        if (localUser !== 'admin' || localPassword !== 'admin') {
            return
        }

        setLogado(true);

        setLocalUser('')
        setLocalPassword('')
        history.push('./home')
    }

    return (
        <div className='card-login'>
            <h1 className='login-title'>Bem Vindo</h1>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    fontSize: '2.5rem'
                }}
                noValidate
                autoComplete="off"
            >  
                <TextField 
                sx={{width: '500px',
                marginBottom: '50px'
                }} 
                onChange={(e) => setLocalUser(e.target.value)}
                value={localUser}
                required id="outlined-basic" label="Login" variant="outlined" />
                
                <TextField
                sx={{width: '500px',
                marginBottom: '50px'
                }}  
                onChange={(e) => setLocalPassword(e.target.value)}
                value={localPassword}
                required id="outlined-basic" label="Senha" variant="outlined" />

                <Button 
                sx={{width: '350px',
                marginBottom: '50px'}} 
                onClick={() => handleSubmit()}
                type='submit' variant="contained">LOGIN</Button>
            </Box>

            <span className='register'>Não tem cadastro? <a className='register-link'> clique aqui!</a> </span>

        </div>
    )
}