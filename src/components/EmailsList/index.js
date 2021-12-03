import './style.css';
import useAuth from '../../hooks/useAuth'
import { useEffect } from 'react';
import EmailCard from '../EmailCard';


export default function EmailList() {
    const { emailList, setEmailList,
        emailListId,
        selecteds, setSelecteds,
        archived, setArchived,
        darkMode, setDarkMode,
        currentLanguage, setCurrentLanguage 
    } = useAuth();

    useEffect(() => {
        fillEmailList()
    }, []);


    async function fillEmailList() {
        try {
            const response = await fetch(`http://my-json-server.typicode.com/workinideas/vagafrontendteste/items/${emailListId}`,
                { method: 'GET' }
            );

            const data = await response.json();

            const list = data.subMenuItems;

            setEmailList(list)
        } catch (error) {
            console.log(error);
        }
    }


    function EmailListHeader() {

        function toFile() {
            setArchived([...archived, ...selecteds])
            setSelecteds([])
        }

        return (
            <div className='email-list-header'>
                <div className='top-bar'
                style={{background: darkMode ? '#000000' : '#ffffff',
                borderBottomColor: !darkMode ? '#000000' : '#ffffff'}
                }
                >
                    <input
                    style={{background: darkMode ? '#000000' : '#ffffff',
                    border: !darkMode ? '1px solid #000000' : '1px solid #ffffff',
                    color: !darkMode ? '#000000' : '#ffffff'}
                    } 
                    className='searchBar' 
                    placeholder={currentLanguage === 'português' ? 'Pesquisar' : 'Search'}/>

                    <div className='global-btn'
                    >
                        <button onClick={() => setDarkMode(darkMode ? false : true)} 
                        className='theme-btn'
                        style={{background: darkMode ? '#000000' : '#ffffff',
                        border: !darkMode ? '1px solid #000000' : '1px solid #ffffff',
                        color: !darkMode ? '#000000' : '#ffffff'}} 
                        >{darkMode ? 'Light' : 'Dark'}</button>
                        <select
                        onChange={(e) => setCurrentLanguage(e.target.value)}
                        value={currentLanguage}
                        className='languages'
                        style={{background: darkMode ? '#000000' : '#ffffff',
                        border: !darkMode ? '1px solid #000000' : '1px solid #ffffff',
                        color: !darkMode ? '#000000' : '#ffffff'}} 
                        >
                            <option>português</option>
                            <option>english</option>
                        </select>
                    </div>
                </div>
                <div className='controllers' 
                style={{background: darkMode ? '#000000' : '#ffffff',
                borderBottomColor: !darkMode ? '#000000' : '#ffffff'}
                }
                >
                    <button
                    style={{background: darkMode ? '#000000' : '#ffffff',
                    border: !darkMode ? '1px solid #000000' : '1px solid #ffffff',
                    color: !darkMode ? '#000000' : '#ffffff'}} 
                    >
                    {currentLanguage === 'português' ? 'Atribuir' : 'Assign'}
                    </button>
                    <button onClick={() => toFile()}
                    style={{background: darkMode ? '#000000' : '#ffffff',
                    border: !darkMode ? '1px solid #000000' : '1px solid #ffffff',
                    color: !darkMode ? '#000000' : '#ffffff'}} 
                    >
                    {currentLanguage === 'português' ? 'Arquivar' : 'To file'}
                    </button>
                    <button
                    style={{background: darkMode ? '#000000' : '#ffffff',
                    border: !darkMode ? '1px solid #000000' : '1px solid #ffffff',
                    color: !darkMode ? '#000000' : '#ffffff'}} 
                    >
                    {currentLanguage === 'português' ? 'Agendar' : 'Program'}
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className='email-list-container'>
            <EmailListHeader />
            {emailList && emailList.map(email => {
                return (
                    !archived.find(id => id === email.id)
                    &&
                    <EmailCard
                        email={email}
                    />
                )
            })}
        </div>
    )
}