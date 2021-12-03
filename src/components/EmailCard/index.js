import './style.css';
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import wppIcon from '../../assets/icons/wpp-icon.svg'


export default function EmailCard({email}) {
    const {selecteds, setSelecteds, darkMode, currentLanguage} = useAuth();
    const [over, setOver] = useState();
    const [checked, setChecked] = useState(false);

    function handleMouseOver() {
        setOver(over ? false : true)
    }

    function handleSelect() {
        if (checked) {
            const filteredSelecteds = selecteds.filter(item => item !== email.id);

            setSelecteds(filteredSelecteds);
            setChecked(false)
        }
        else {
            setSelecteds([...selecteds, email.id]);
            setChecked(true)
        }
    }

    return (
        <div className={darkMode ? 'email-card-dark' : 'email-card-light'} 
                key='email.id'
                onMouseEnter={() => handleMouseOver()}
                onMouseLeave={() => handleMouseOver()} 
                >
                    <div className='left-card'>
                        {over || selecteds.length ? 
                        <Checkbox
                        checked={checked}
                        onChange={handleSelect}
                        inputProps={{ 'aria-label': 'controlled' }}
                        size='medium'
                        icon={<RadioButtonUncheckedIcon />}
                        checkedIcon={<RadioButtonCheckedIcon />}
                        sx={{
                            color: darkMode ? '#ffffff' : '#000000'
                        }}
                        /> 
                        : 
                        <div className='owner'>{email.owner}</div>}
                        
                    </div>
                    <div className='middle-card'>
                        <h1 className='name'>{email.name}</h1>
                        <h2 className='subject'>{email.subject}</h2 >
                        <span className='generic-span'>
                        <img className='wpp-icon' src={wppIcon} />
                        Caixa de entrada
                        </span>
                    </div>
                    <div className='right-card'>
                        <span className='date'>{currentLanguage === 'português' ? 'Hoje' : 'Today'}
                        , 14:17</span>
                        <span className='time'>3 
                        {currentLanguage === 'português' ? ' Horas' : ' Hours'}</span>
                        <div className='users'>
                            {email.users && email.users.map(user => {
                                return (
                                    <div className='user'>{user}</div>
                                )
                            })}
                        </div>
                    </div>
                </div>
    )
}