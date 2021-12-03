import './style.css'
import useAuth from '../../hooks/useAuth'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import { useState } from 'react';
import { useHistory } from 'react-router';


export default function Profile() {

    const { darkMode, currentLanguage, setLogado } = useAuth();
    const [openLogout, setOpenLogout] = useState(false);
    const history = useHistory();

    function handleLogout() {
        setLogado(false);
        history.push('./login')
    }

    return (
        <div
            className='profile-container'
            style={{ background: darkMode ? '#000000' : '#ffffff' }}
        >
            <Stack direction="row" 
            spacing={2}
            onClick={() => setOpenLogout(openLogout ? false : true)}
            >
                <Avatar 
                sx={{ 
                    bgcolor: deepOrange[500],
                    width: 70,
                    height: 70
                }}
                >OA</Avatar>
            </Stack>

            {openLogout && <button className='logout-btn'
            onClick={() => handleLogout()}
            >
            {currentLanguage === 'português' ? 'Sair' : 'Logout'}
            </button>}

            <select className='profile-select'
            style={{background: darkMode ? '#000000' : '#ffffff',
            border: !darkMode ? '1px solid #000000' : '1px solid #ffffff',
            color: !darkMode ? '#000000' : '#ffffff'}}
            >
                <option className='profile-option' selected>
                {currentLanguage === 'português' ? 'novo' : 'new'}
                </option>
            </select>

            <div className='bottom-line'
            style={{background: darkMode ? '#ffffffb6' : '#00000077'}}
            ></div>
        </div>
    )
}