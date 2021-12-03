import './style.css';
import EmailList from '../../components/EmailsList'
import useAuth from '../../hooks/useAuth';

export default function PainelB() {
    const {darkMode} = useAuth();

    return (
        <div className="painel-b"
        style={{background: darkMode ? '#000000' : '#ffffff'}}
        >
            <EmailList />
        </div>
    )
}