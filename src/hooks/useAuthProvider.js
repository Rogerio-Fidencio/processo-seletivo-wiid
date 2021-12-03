import { useState } from "react";

function useAuthProvider() {
    const [connected, setConnected] = useState(false);
    const [token, setToken] = useState('');
    const [darkTheme, setDarkTheme] = useState(false);
    const [emailList, setEmailList] = useState([]);
    const [emailListId, setEmailListId] = useState();
    const [selecteds, setSelecteds] = useState([]);
    const [archived, setArchived] = useState([]);
    const [darkMode, setDarkMode] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState('português');
    const [logado, setLogado] = useState(false);

    return {
        connected,
        setConnected,
        token,
        setToken,
        darkTheme,
        setDarkTheme,
        emailListId,
        setEmailListId,
        emailList,
        setEmailList,
        selecteds,
        setSelecteds,
        archived, 
        setArchived,
        darkMode, 
        setDarkMode, 
        currentLanguage, 
        setCurrentLanguage,
        logado, 
        setLogado
    }
}

export default useAuthProvider;