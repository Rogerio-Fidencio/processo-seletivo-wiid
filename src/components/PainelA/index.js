import './style.css';
import Profile from '../Profile';
import AccountTree from '../../components/AccountTree'
import useAuth from '../../hooks/useAuth';

export default function PainelA() {
    const {darkMode} = useAuth();

    return (
        <div className="painel-a"
        style={{background: darkMode ? '#000000' : '#ffffff'}}
        >
            <Profile />

            <AccountTree />
        </div>
    )
}