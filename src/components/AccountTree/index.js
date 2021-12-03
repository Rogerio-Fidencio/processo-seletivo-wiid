import './style.css';
import {useEffect, useState} from 'react';
import useAuth from '../../hooks/useAuth';

export default function AccountTree() {
    const [accounts, setAccounts] = useState([])
    const [openSubMenu, SetOpenSubMenu] = useState()
    const {setEmailList, darkMode} = useAuth();

    
    useEffect(() => {
        async function getAccountTree() {
            try {
                const response = await fetch('http://my-json-server.typicode.com/workinideas/vagafrontendteste/menus', 
                   { method: 'GET'}
                );
        
                const data = await response.json();
        
                setAccounts(data);
            } catch (error) {
                console.log(error);
            }
        }
        getAccountTree();
    }, [])


    async function fillEmailList(id) {
        try {
            const response = await fetch(`http://my-json-server.typicode.com/workinideas/vagafrontendteste/items/${id}`,
                { method: 'GET' }
            );

            const data = await response.json();

            const list = data.subMenuItems;

            setEmailList(list)
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <div className='accounsts-container'>
            {accounts.map(account => {

                return(
                    <div 
                    key={account.id} 
                    className="account-container"
                    style={{color: !darkMode ? '#000000' : '#ffffff'}}
                    >
                        <span 
                        className='account'
                        onClick={() => SetOpenSubMenu(openSubMenu !== account.id ? account.id : '')} 
                        >
                            {account.name}
                        </span> 
                        { openSubMenu === account.id && <div className='subMenu-container'>
                        {account.subMenus.map(subMenu => {
                            return (
                               <span 
                               className='subMenu' 
                               key={subMenu.id}
                               onClick={() => fillEmailList(subMenu.id)}
                               >{subMenu.name}</span>
                            )
                        })}
                        </div>}
                    </div>

                )
            })}
        </div>
    )
}