import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';
import { AuthProvider } from './context/AuthContext';
import useAuth from './hooks/useAuth';
import Home from './pages/Home/';
import Login from './pages/Login/';

const RotasProtegidas = ({ children }) => {
  const { logado } = useAuth();
  return (
    <Route render={() => (logado ? children : <Redirect to="/login" />)} />
  );
};

const Routes = () => {
  return (
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" component={Login} />
            <RotasProtegidas>
              <Route
                path="/home"
                component={Home}
              />
            </RotasProtegidas>
          </Switch>
        </Router>
      </AuthProvider>
  )
};

export default Routes;